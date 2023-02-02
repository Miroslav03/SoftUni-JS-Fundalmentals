function maxNumber(array){
    let string=``
    for (let i = 0; i < array.length; i++) {
        if(array.length==1){
            console.log(array[0]);
            break
        }
        let element = array[i];
        for (var j = i+1 ;j <array.length; j++) {
            let currentNum=array[j]
            if(element>currentNum){
                flag=true
            }else{
                flag=false
                break
            }
            
        }
        if(j==array.length&&flag==false){
            string=string+` `+element
        }
        if(flag){
            string=string+` `+element
            
        }
        flag=false
    }

    console.log(string);

}maxNumber([48,6,15])
