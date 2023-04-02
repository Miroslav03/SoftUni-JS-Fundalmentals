function houseParty(array) {
    let nameArr = []
    let command = ''
    let includes = false
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(` `);
        let name = element[0]
        if (element.length == 3) {
            command = 'is'
        } else {
            command = 'not'
        }
        switch (command) {
            case 'is':
                includes = nameArr.includes(name)
                if (includes === true) {
                    console.log(`${name} is already in the list!`);
                } else {
                    nameArr.push(name)
                }

                break;
            case 'not':
                includes = nameArr.includes(name)
                if (includes === true) {
                    nameArr= nameArr.filter(word => word !== name);
                } else {
                    console.log(`${name} is not in the list!`)
                }
                break;
            default:
                break;
        }
    }
    
    return console.log(nameArr.join(`\n`));


} houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)