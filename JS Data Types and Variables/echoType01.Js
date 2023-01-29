function EchoType(Text){

    if(typeof Text===`string`){
        console.log(`string`);
        console.log(Text);
    }else if(typeof Text==`number`){
        console.log(`number`);
        console.log(Text);
    }else{
        console.log(typeof Text);
        console.log(`Parameter is not suitable for printing`);
    }



}
EchoType('Hello, JavaScript!')
EchoType(18)