function arrayManipulation(array) {
    let things = []
    
    let allThingsToDo = array.slice(-4)
    array.splice(-4)

    for (let i = 0; i < allThingsToDo.length; i++) {
        let element = allThingsToDo[i];

        let result = element.match(/\d+/g).map(result => parseInt(result));
        things=things.concat(result)
        
    }
    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        for (let j = 0; j < element.length; j++) {
            array = element.split(/\s+/).map(Number);
        }
    }
    
    //remove a specific element from an array
    let index = array.indexOf(things[1])
    if (index !== -1) {
        array.splice(index, 1);
    }


    array.splice(things[2], 1);//remove an element from specific index

    array.splice(things[4], 0, things[3]);//add a specific alement in a specific index in an array 

    array.push(things[0])//add


     return array.join(` `);

} arrayManipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])

