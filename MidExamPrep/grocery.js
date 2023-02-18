function groceryList(input) {

    let grocerys = input.shift().split(`!`)

    for (let i = 0; i < input.length; i++) {
        let cases = input[i].split(` `)

        switch (cases[0]) {
            case `Urgent`:
                if (grocerys.includes(cases[1])) {
                    break
                } else {
                    grocerys.unshift(cases[1])
                }
                break;
            case `Unnecessary`:
                if (grocerys.includes(cases[1])) {
                    grocerys.pop(cases[1])
                } else {
                    break
                }
            case `Correct`:
                let oldName = cases[1]
                let newName = cases[2]
                if (grocerys.includes(oldName)) {
                    let index = grocerys.indexOf(oldName);
                    grocerys[index] = newName;
                } else {
                    break
                }
            case `Rearrange`:
                if (grocerys.includes(cases[1])) {
                    grocerys.pop(cases[1])
                    grocerys.push(cases[1])
                } else {
                    break
                }
            case `Go`:
                return console.log(grocerys.join(`, `));
            default:
                break;
        }
    }
     return console.log(grocerys.join(`, `));

} groceryList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Go Shopping!"])
)

