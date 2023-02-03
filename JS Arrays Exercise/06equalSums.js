function equalSum(array){
    let leftSum=0;
    let rightSum=0;
    let flag
    for (let i = 0; i < array.length; i++) {
        if(array.length==1){
            console.log(0);
            break
        }
        let element = array[i];
        
        for (let j = i+1; j < array.length; j++) {
            rightSum+=array[j]
            if(rightSum==leftSum){
                console.log(i);
                flag=true;
                break;
            }else if (rightSum!=leftSum){
                flag=false
            }
            
        }
        rightSum=0
        leftSum+=array[i]
        if(flag){
            break;
        }
    }
    if(flag==false){
        console.log(`no`);
    }


}
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
