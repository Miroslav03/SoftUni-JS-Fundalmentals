function calculator(number1,operator,number2){

    let operation=0

    if(operator==`+`){
        operation=number1+number2;
    }else if(operator==`-`){
        operation=number1-number2;
    }else if(operator==`*`){
        operation=number1*number2;
    }else if(operator==`/`){
        operation=number1/number2;
    }
    console.log(operation.toFixed(2));

}
calculator(5,'+',10)