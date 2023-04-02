function problem(array) {


    let string = array.shift()

    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(` `);
        let command = elements[0]
        let commandValues = elements.slice(1)

        switch (command) {
            case 'Change': {
                let substring = commandValues[0]
                let replacement = commandValues[1]
                string = string.split(substring).join(replacement);
                console.log(string);
                break;
            }
            case 'Includes': {
                let substring = commandValues[0]
                if (string.includes(substring)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            }
            case 'End': {
                let substring = commandValues[0]

                if (string.endsWith(substring)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break
            }
            case 'Uppercase': {
                string = string.toUpperCase()
                console.log(string);
                break
            }
            case 'FindIndex': {
                let char = commandValues[0]
                for (let i = 0; i < string.length; i++) {
                    let letter = string[i];
                    if (letter == char) {
                        console.log(i);
                        break
                    }

                }

                break;
            }
            case 'Cut': {
                let index = Number(commandValues[0])
                let number = Number(commandValues[1])
                string = string.substring(index)
                string = string.substring(0, number)
                console.log(string);
                break;
            }
            case 'Done': {


                return
            }

        }
    }



} problem(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])

