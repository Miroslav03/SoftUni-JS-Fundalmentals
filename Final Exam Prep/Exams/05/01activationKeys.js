function activationKeys(array){

    let str = array.shift()

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(`>>>`)
        let command = element[0]
        let commandVlaues = element.slice(1)

        switch (command) {
            case `Contains`:{
                let substring = commandVlaues[0]
                if(str.includes(substring)){
                    console.log(`${str} contains ${substring}`);
                }else{
                    console.log("Substring not found!");
                }
                break;
            }
            case `Flip`:{
                let cases = commandVlaues[0]
                if(cases == `Upper`){
                    let startIndex = Number(commandVlaues[1])
                    let endIndex = Number(commandVlaues[2])
                    let firstPart = str.substring(0,startIndex)
                    let CapitalPart  = str.substring(startIndex,endIndex).toUpperCase()
                    let secondPart =str.substring(endIndex)
                    str = firstPart + CapitalPart + secondPart
                }else{
                    let startIndex = Number(commandVlaues[1])
                    let endIndex = Number(commandVlaues[2])
                    let firstPart = str.substring(0,startIndex)
                    let CapitalPart  = str.substring(startIndex,endIndex).toLowerCase()
                    let secondPart =str.substring(endIndex)
                    str = firstPart + CapitalPart + secondPart
                }
                console.log(str);
                break;
            }
            case `Slice`:{
                let startIndex = Number(commandVlaues[0])
                let endIndex = Number(commandVlaues[1])
                let firstPart = str.substring(0,startIndex)
                let secondPart =str.substring(endIndex)
                str = firstPart  + secondPart
                console.log(str);
                break;
            }
            case `Generate`:{
                console.log(`Your activation key is: ${str}`);
                break;
            }
                
        
    
        }
    }







}activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

