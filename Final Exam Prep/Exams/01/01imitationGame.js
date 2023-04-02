function imitationGame(array) {

    let string = array.shift()

    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(`|`);
        let command = elements[0]
        let commandValues = elements.slice(1)

        switch (command) {
            case 'ChangeAll': {
                let substring = commandValues[0]
                let replacement = commandValues[1]
                string = string.split(substring).join(replacement);
                
                break;
            }
            case 'Insert': {
                let index = Number(commandValues[0])
                let value = commandValues[1]
                let firstHalf = string.slice(0, index)
                let secondHalf = string.slice(index)
                string = firstHalf + value + secondHalf
                break;
            }
            case 'Move': {
                let index = Number(commandValues[0])
                let moved = string.slice(0, index)
                let secondHalf = string.slice(index)
                string = secondHalf + moved
                break;
            }
            case 'Decode': {
                return console.log(`The decrypted message is: ${string}`);
            }

        }
    }


} imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  

)