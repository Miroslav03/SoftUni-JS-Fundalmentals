function adressBook(input){
     let adressBook = {}
    for (const el  of input) {
        let currentDetails = el.split(`:`);
        let [name, adress] = currentDetails;
        adressBook[name] = adress

    }

    let final = Object.entries(adressBook).sort((a,b) => a[0].localeCompare(b[0]))

    for (const [key , value] of final) {
        console.log(`${key} -> ${value}`);
    }


}adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)