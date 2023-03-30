function addAndSubtract(arr){

    let arr1=[]
    let sumOriginal=0
    let sumMOdified=0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        sumOriginal+=element
        if(element%2==0){
            element+=i
        }else{
            element-=i
        }
        arr1.push(element)
        sumMOdified+=element
    }
    console.log(arr1);  
    console.log(sumOriginal);
    console.log(sumMOdified);

}addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])