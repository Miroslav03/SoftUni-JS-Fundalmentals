function arrayManipulation(array) {
    let things = []
    let numbers = []
    let allThingsToDo = array.slice(-4)
    array.splice(-4)

    for (let i = 0; i < allThingsToDo.length; i++) {
        let element = allThingsToDo[i];
        for (let j = 0; j < element.length; j++) {
            if (element[j] == Number(element[j]) && Number(element[j]) != 0) {
                things.push(Number(element[j]))
            }
        }
    }
    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        for (let j = 0; j < element.length; j++) {
             array = element.split(/\s+/).map(Number);
        }
    }

    function removee(n){

        array.filter(el => el !== n)
        return array
    }
    function removeAT(index){
       
        finalArr.splice(index,1)
    }
    function insertAt(num,index){
       
        finalArr.splice(index,0,num)
        
    }

    array.push(things[0])
    array.pop(things[1])
    array.splice(things[4],0,things[3])
    array.splice(things[2],1)
    
    console.log(array);

} arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)