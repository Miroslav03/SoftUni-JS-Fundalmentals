function loadingBar(percent){

    let chargingBar=`[..........]`
    let newString=``
    for (let i = 10; i <= percent; i+=10) {
        newString = chargingBar.replace(".", "%"); // "_xxx"
        chargingBar = newString
        
    }
    if(percent==100){
        return console.log(`${percent}% Complete!
${newString}`)
    }else{
        return console.log(`${percent}% ${newString} 
Still loading...`);
    }   

}loadingBar(100)
