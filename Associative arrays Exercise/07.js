function minerTask(array) {
    let map = new Map

    for (let i = 0; i < array.length; i += 2) {
        let element = array[i]
        let quanity = Number(array[i+1])

        if (map.has(element) == false) {
            map.set(element,quanity)
        } else {
           let currentQuanity =  Number(map.get(element))
           map.set(element,quanity+ currentQuanity)
        }

    }


    for (const [key,value] of map) {
        console.log(`${key} -> ${value}`);
    }


} minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    
)