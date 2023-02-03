function sequenceOfElements(array){

    let flagequal = false
    let lengthCounter=0
    let arr1=[]
    let arr2=[]
    let finalarr=[]
    let currentHighest=0;
    let currentHighestI=1
    let icounter=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]==array[0]){
            flagequal=true
        }else{
            flagequal=false;
          break
        }
        
      } 
    if (flagequal){
        console.log(array.join(` `));
    }else{
        for (let i = 0; i < array.length; i++) {
            lengthCounter=0
            
            
            let element = array[i];
            arr1.push(element)
            for (let j = i+ 1; j < array.length; j++) {
                let currentElement=array[j]
                if(element==currentElement){
                    icounter++
                    if(currentHighestI>=icounter){
                        currentHighestI=icounter
                   }
                    arr1.push(currentElement)
                    arr2=arr1
                    lengthCounter=arr2.length
    
                    if(lengthCounter>currentHighest  ||currentHighestI>=icounter){
                        finalarr=arr2
                    }
                    
                    if(lengthCounter>currentHighest){
                        currentHighest=lengthCounter
                    }
                   
                    
                    
                }else {
                    if(lengthCounter==0){
                        i+=lengthCounter
                        arr1=[]
                        break
                    }else{
                        arr1=[]
                    i+=lengthCounter-1
                    break
                    }
                   
                }
            }
            
        }
    }

console.log(finalarr.join(` `));
}
sequenceOfElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
sequenceOfElements([4, 4, 4, 4])
sequenceOfElements([1, 1, 1, 2, 3, 1, 3, 3])
sequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])