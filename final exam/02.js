function problem(array) {

    let players = Number(array.shift())
    let collection = {}
    let regex = /[|](?<name>[A-Z]{4,})[|]:[#](?<title>[a-zA-z]+\s[a-zA-z]+)[#]/

    for (let i = 0; i < players; i++) {
        let element = array[i];
        let match = regex.exec(element)
        if (match == null) {
            console.log("Access denied!");
            continue
        } else {
            let name = match.groups.name
            let title = match.groups.title

            let strength = name.length
            let armor = title.length

            collection[name] = {
                title: title,
                strength: strength,
                armor: armor
            }
            console.log(`${name}, The ${collection[name].title}`);
            console.log(`>> Strength: ${collection[name].strength}`);
            console.log(`>> Armor: ${collection[name].armor}`);
        }

    }

    //for (const [name, arr] of Object.entries(collection)) {
    //    console.log(`${name}, The ${arr.title}`);
    //    console.log(`>> Strength: ${arr.strength}`);
    //    console.log(`>> Armor: ${arr.armor}`);
    //}

} problem(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])


