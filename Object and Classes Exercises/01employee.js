function employee(array) {

    class Employe{
            constructor(Name){
                this.Name= Name
            }
    }

    for (const name of array) {
        let nameLength = name.length
        let employe= new Employe(name)
        let key = Object.keys(employe)
        console.log(`${key}: ${employe[key]} -- Personal Number: ${nameLength}`);

    }

} employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)