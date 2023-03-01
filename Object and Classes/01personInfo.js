function Miro(firstName,lastName,age){

    let person = {

        firstName:firstName,
        lastName:lastName,
        age:age
    }    

    for (const key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }

    
}Miro("Peter", "Pan","20")