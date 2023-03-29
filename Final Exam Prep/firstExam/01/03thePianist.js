function thePianist(array){
    let number = Number(array.shift())
    let piece = {}

    for (let i = 0; i < number; i++) {
        let element = array[i].split(`|`);
        let name = element[0]
        let composer = element[1]
        let key = element[2]

        piece[name] = {
            composer,
            key
        }
    }

    let arr = array.slice(number)

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(`|`);
        let command = element[0]
        let name = element[1]
        let values = element.slice(2)

        switch (command) {
            case `Add`:{
                let composer = values[0]
                let key = values[1]
                if(piece[name] == undefined){
                    piece[name] = {
                        composer: composer,
                        key: key
                    }
                    console.log(`${name} by ${composer} in ${key} added to the collection!`);
                }else{
                    console.log(`${name} is already in the collection!`);
                   
                }
                break;
            }case `Remove`:{
                if(piece[name] == undefined){
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }else{
                    delete piece[name]
                    console.log(`Successfully removed ${name}!`);
                }
                break;
            }
            case `ChangeKey`:{
                let key = values.pop()
                if(piece[name] == undefined){
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }else{
                    piece[name].key = key
                    console.log(`Changed the key of ${name} to ${key}!`)
                }
                break;
            }
            case `Stop`:{
                for (const [name,kur] of Object.entries(piece)) {
                    console.log(`${name} -> Composer: ${kur.composer}, Key: ${kur.key}`);
                }
                return
        
            }
                
        }
    }

}thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
  )