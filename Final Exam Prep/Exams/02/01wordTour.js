function wordTour(array) {


    let string = array.shift()

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(`:`)
        let command = element[0]
        let commandValue = element.slice(1)
        switch (command) {
            case 'Add Stop': {
                let index = Number(commandValue[0])
                let replacable = commandValue[1]
                if (string.length >= index) {
                    let firstHalf = string.substring(0, index)
                    let secondHalf = string.substring(index)
                    string = firstHalf + replacable + secondHalf
                }
                console.log(string);
                break;
            }
            case 'Remove Stop': {
                let startIndex = Number(commandValue[0])
                let endIndex = Number(commandValue[1])
                if (string.length >= startIndex && string.length > endIndex) {
                    let firstHalf = string.substring(0, startIndex)
                    let secondHalf = string.substring(endIndex + 1)
                    string = firstHalf + secondHalf
                }
                console.log(string);
                break;
            }
            case 'Switch': {
                let oldString = commandValue[0]
                let newString = commandValue[1]
                    let rgx = new RegExp(oldString, 'g');
                    string = string.replace(rgx, newString);
                
                console.log(string);
                break;
            }
            case 'Travel': {
                return console.log(`Ready for world tour! Planned stops: ${string}`);

            }


            default:
                break;
        }

    }


} wordTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

