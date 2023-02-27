function problem3(input) {
    let finalArr = []
    let spamArr = []
    let includes = false
    let index
    for (let i = 0; i < input.length; i++) {
        let cases = input[i].split(` `)
        let command = cases[0]
        let message = cases[1]
        switch (command) {
            case 'Chat':
                finalArr.push(message)
                break;
            case 'Delete':
                includes = finalArr.includes(message)
                if (includes === true) {
                    index = finalArr.indexOf(message)
                    if (index !== -1) {
                        finalArr.splice(index, 1);

                    }
                } else {
                    continue
                }
                break;
            case 'Edit':
                let editedversion = cases[2]
                includes = finalArr.includes(message)
                if (includes === true) {
                    index = finalArr.indexOf(message)
                    finalArr.splice(index, 1, editedversion)
                } else {
                    continue
                }
                break;
            case 'Pin':
                includes = finalArr.includes(message)
                if (includes === true) {
                    index = finalArr.indexOf(message)
                    if (index !== -1) {
                        finalArr.splice(index, 1);
                        finalArr.push(message);
                    }
                } else {
                    continue
                }
                break;
            case 'Spam':
                for (let j = 1; j < cases.length; j++) {
                    let spamElemenet = cases[j]
                    spamArr.push(spamElemenet)

                }
                finalArr = finalArr.concat(spamArr)

                break;

            case 'end':
                return console.log(finalArr.join(`\n`));
        }
    }



} problem3(["Chat John",
    "Spam Let's go to the zoo d d d d d d d d d d",
    
    "end"])




