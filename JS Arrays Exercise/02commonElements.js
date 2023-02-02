function commonElements(arr1,arr2){

    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let secondElement=arr2[j]
            if(typeof element != typeof secondElement){
                continue
            }else if(typeof element == typeof secondElement&& element==secondElement){
                console.log(element);      
            }
            
        }
    }



}commonElements(  ['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])
console.log(`-------------------------------------------------------------------------`);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)