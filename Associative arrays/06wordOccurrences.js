function word(input){
    
    let obj = {}
    for (const el of input) {
        if(obj.hasOwnProperty(el)){
            obj[el] +=1
        }else{
            obj[el] =1
        }
    }
    let sort = Object.entries(obj).sort((a,b) => b[1]- a[1])
    
    for (const [key,value] of sort) {
        console.log(`${key} -> ${value} times`);
    }

}word(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])