function arrayManipulation(array) {

    let arr = array.shift()
    arr = arr.split(` `).map(Number)
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(` `);
        let command = element[0]
        let values = element.slice(1)

        switch (command) {
            case `Add`:{
                let number = Number(values[0])
                arr.push(number)
                break;
            }
            case `Remove`:{
                let number = Number(values[0])
                arr = arr.filter(a => a != number)
                break;
            }
            case `RemoveAt`:{
                let index = Number(values[0])
                let first = arr.slice(0,index)
                let second = arr.slice(index+1)
                arr = first.concat(second)
                break;
            }
            case `Insert`:{
                let number = Number(values[0])
                let index = Number(values[1])
                let first = arr.slice(0,index)
                first.push(number)
                let second = arr.slice(index)
                arr = first.concat(second)
                break;
            }
                
        }
    }
    return console.log(arr.join(` `));

} arrayManipulation(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)

