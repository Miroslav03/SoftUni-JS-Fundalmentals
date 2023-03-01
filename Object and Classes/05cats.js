function cats(input){

    class Cats {
        constructor(name,age){
            this.name=name
            this.age=age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const cats of input) {
        let [naame, age] = cats.split(` `)
        let newCat = new Cats(naame,age)
        newCat.meow()
    }


}cats(['Mellow 2', 'Tom 5'])