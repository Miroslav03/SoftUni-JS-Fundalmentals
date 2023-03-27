function secretChat(array) {

    let secretChat = array.shift()

    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(':|:')
        let command = elements[0]

        switch (command) {
            case 'ChangeAll': {
                let substring = elements[1]
                let replacement = elements[2]
                while (secretChat.includes(substring)) {
                    secretChat = secretChat.replace(substring, replacement)
                }
                console.log(secretChat);
                break;
            }
            case 'Reverse': {
                let substring = elements[1]
                if (secretChat.includes(substring)) {
                    secretChat = secretChat.replace(substring, '')
                    let reversed = reverse(substring)
                    secretChat += reversed
                    console.log(secretChat);
                } else {
                    console.log('error');
                }

                break;
            }
            case 'InsertSpace': {
                let index = elements[1]
                let firstHalf = secretChat.substring(0, index)
                let secondHalf = secretChat.substring(index)
                secretChat = firstHalf + ` ` + secondHalf
                console.log(secretChat);
                break;
            }
            case 'Reveal': {
                return console.log(`You have a new text message: ${secretChat}`);

            }

        }

        function reverse(text) {
            return text.split(``).reverse().join(``)
        }
    }

} secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

)