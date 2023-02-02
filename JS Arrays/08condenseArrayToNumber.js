function condanceArrayToNumber(array){

    let currentArr=array
    let currentSum=0
    if(array.length==1){
        console.log(array[0]);
    }else{
        while(currentArr.length!==2){
            let arr=[]
            for (let i = 0; i < currentArr.length-1; i++) {
                currentSum=currentArr[i]+currentArr[i+1]
                arr.push(currentSum)
                
            }
            currentArr=arr
    
        }
        
        console.log(currentArr[0]+currentArr[1]);
    }
    


}
condanceArrayToNumber([2,10,3])
condanceArrayToNumber([5,0,4,1,2])
condanceArrayToNumber([1])