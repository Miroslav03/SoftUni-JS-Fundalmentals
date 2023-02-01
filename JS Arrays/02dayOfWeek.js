function dayOfWeek(day){

    let daysOfWekk=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`]

    

    if(day<1|| day>7){
        console.log(`Invalid day!`);
    }else{
        console.log(daysOfWekk[day-1]);
    }
}
dayOfWeek(8)