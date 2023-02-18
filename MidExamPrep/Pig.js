function pig(array){

    let foodKg=Number(array[0])*1000
    let hayKG=Number(array[1])*1000
    let coverKG =Number(array[2])*1000
    let weight=Number(array[3])*1000
    let flag=true
    for (let i = 1; i <= 30; i++) {
        foodKg-=300
        if(i%2==0){
            let neededHay=foodKg*0.05
            hayKG-=neededHay
        }
        if(i%3==0){
            let neededCover=weight/3
            coverKG-=neededCover
        }
        if(foodKg<=0 ||hayKG<=0||coverKG<=0){
            return console.log(`Merry must go to the pet store!`);
            
        }

    }
    return console.log(`Everything is fine! Puppy is happy! Food: ${(foodKg/1000).toFixed(2)}, Hay: ${(hayKG/1000).toFixed(2)}, Cover: ${(coverKG/1000).toFixed(2)}.`);

}pig((["9",
"5",
"5.2",
"1"])

)