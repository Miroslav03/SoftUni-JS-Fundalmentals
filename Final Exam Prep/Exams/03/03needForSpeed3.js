function needForSpeed(array){

    let numberOfCars = Number(array.shift())
    let collection = {}
    
    for (let i = 0; i < numberOfCars; i++) {
        const element = array[i].split(`|`)
        let carName = element[0]
        let mileage = Number(element[1])
        let fuel = Number(element[2])
        
            collection[carName] ={
                mileage:mileage,
                fuel:fuel
            }
    }    

    let commandsArr = array.slice(numberOfCars)  

    for (let i = 0; i < commandsArr.length; i++) {
        let commands = commandsArr[i].split(` : `)
        let command = commands[0]
        let carName = commands[1]
        let commandValues = commands.slice(2)

        switch (command) {
            case `Drive`:{
                let distance = Number(commandValues[0])
                let fuel = Number(commandValues[1])
                
                if(collection[carName].fuel<fuel){
                    console.log(`Not enough fuel to make that ride`);       
                }else{
                    collection[carName].mileage +=distance
                    collection[carName].fuel -= fuel
                    console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    
                }
                if(collection[carName].mileage>=100000){
                    delete collection[carName]
                    console.log(`Time to sell the ${carName}!`);
                }
                break;
            }
            case `Refuel`:{
                let fuel = Number(commandValues[0])

                let diffrence = Math.min(75-collection[carName].fuel,fuel)
                collection[carName].fuel +=diffrence
                console.log(`${carName} refueled with ${diffrence} liters`);
                break;
            }  
            case `Revert`:{
                let kilometers = Number(commandValues[0])

                collection[carName].mileage -= kilometers
                if(collection[carName].mileage<10000){
                    collection[carName].mileage = 10000
                }else{
                    console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
                }
                break;
            }
            case `Stop`:{
                for (const [car,arr] of Object.entries(collection)) {
                    console.log(`${car} -> Mileage: ${arr.mileage} kms, Fuel in the tank: ${arr.fuel} lt.`);
                }
                return
               
            }
        }
    }
}needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  
)