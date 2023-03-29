function passWordReset(array) {

    let string = array.shift()

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(` `);
        let command = element[0]
        let commandValues = element.slice(1)
        switch (command) {
            case 'TakeOdd': {
                string = oddIndex(string)
                console.log(string);
                break;
            }
            case 'Cut': {
                let index = Number(commandValues[0])
                let number = Number(commandValues[1])
                let firstHalf = string.substring(0,index)
                let secondHalf = string.substring(index+number)
                string = firstHalf+secondHalf
                console.log(string);
                break;
            }
            case 'Substitute': {
                let substring = commandValues[0]
                let substitute = commandValues[1]
                if(string.includes(substring)){
                    while(string.includes(substring)){
                        string= string.replace(substring,substitute)
                    }
                    console.log(string);
                }else{
                    console.log("Nothing to replace!");
                }
                break;
            }
            case 'Done': {
                return console.log(`Your password is: ${string}`);
            
            }
            
        }
    }

        function oddIndex(text){

           let stringArr = text.split(``)
           let string = ``

           for (let i = 0; i < stringArr.length; i++) {
            let letter = stringArr[i]
            if(i%2!=0){
                string +=letter
            }
            
           }
           text = string
           return text
        }

} passWordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

