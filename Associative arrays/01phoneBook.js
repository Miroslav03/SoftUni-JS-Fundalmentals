function phoneBook(input){
    let phoneBook = {}

    for (const el of input) {
        let currentElements = el.split(` `)
        let [name, number] = currentElements
        phoneBook[name] = number
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)