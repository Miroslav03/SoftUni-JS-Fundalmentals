function sumDigits(number){

    let text=String(number);
    let sum=0;
    for (let i = 0; i < text.length; i++) {
        let currentNum=Number(text[i]);
        sum+=currentNum
        
    }
    console.log(sum);


}
sumDigits(245678)