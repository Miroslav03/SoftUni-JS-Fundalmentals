function convertToJSON(firstName,lastName,hairColor){

    let person = {

        name:firstName,
        lastName:lastName,
        hairColor:hairColor    
    }

    let strinPerson = JSON.stringify(person)
    console.log(strinPerson);


}convertToJSON('George', 'Jones', 'Brown')