function equalArrays(array,array2){
    let sum=0
    let flag=false
    for (let i = 0; i < array.length; i++) {
        const element = Number(array[i]);
        if(element==Number(array2[i])){
            sum+=element
            flag=true
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);  
            sum=0
            break;
        }
        
    }

    if(sum>0){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }


}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])
equalArrays(['10','20','30'], ['10','20','30'])