function needForSpeed(array){

    let numberOfCars = Number(array.shift())
    let collection = new Map()
    function createCar(name,mileage,fuel){
        let car = {
            name:name,
            mileage:mileage,
            fuel:fuel,

            Drive(distance,fuel){
                if(this.fuel<fuel){
                    console.log(`Not enough fuel to make that ride`);       
                }else{
                    this.mileage +=distance
                    this.fuel -= fuel
                    console.log(`${this.name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    
                }
                if(this.mileage>=100000){
                    collection.delete(this.name)
                    console.log(`Time to sell the ${this.name}!`);
                }
            },
            Refuel(fuel){
                let diffrence = Math.min(75-this.fuel,fuel)
                this.fuel +=diffrence
                console.log(`${this.name} refueled with ${diffrence} liters`);
            },
            Revert(kilometers){
                this.mileage -= kilometers
                if(this.mileage<10000){
                    this.mileage = 10000
                }else{
                    console.log(`${this.name} mileage decreased by ${kilometers} kilometers`);
                }
            },
            toString(){
                console.log(`${this.name} -> Mileage: ${this.mileage} kms, Fuel in the tank: ${this.fuel} lt.`);
            }
        }
        return car
    }


    for (let i = 0; i < numberOfCars; i++) {
        const element = array[i].split(`|`)
        let carName = element[0]
        let mileage = Number(element[1])
        let fuel = Number(element[2])
        let car = createCar(carName,mileage,fuel)
        collection.set(carName,car)
    }    

    let commandsArr = array.slice(numberOfCars)  

    for (let i = 0; i < commandsArr.length; i++) {
        let commands = commandsArr[i].split(` : `)
        let command = commands[0]
        let carName = commands[1]
        let commandValues = commands.slice(2)

        switch (command) {
            case `Drive`:{
                let car = collection.get(carName)
                let distance = Number(commandValues[0])
                let fuel = Number(commandValues[1])
                car.Drive(distance,fuel)
                break;
            }
            case `Refuel`:{
                let car = collection.get(carName)
                let fuel = Number(commandValues[0])
                car.Refuel(fuel)
                break;
            }  
            case `Revert`:{
                let car = collection.get(carName)
                let kilometers = Number(commandValues[0])
                car.Revert(kilometers)
                break;
            }
            case `Stop`:{
                for (const car of collection) {
                       car.toString() 
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