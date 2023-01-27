function password(input){
    let index=1
    let username=input[0];
    let trys=0
    let currentPass=(input[index]);
    let flag=false
     let reversedString = ''

  for (let i = username.length - 1; i >= 0; i--) {
    reversedString += username[i]

  }
  let password=reversedString
    if(currentPass==password){
        console.log(`User ${username} logged in.`);
    }
    while(currentPass!=password){

        for (let i = 1; i <= 4; i++) {    

            if(trys==4){
                console.log(`User ${username} blocked!`);
                flag=true
                break;
            }
            
            if(currentPass!=password&&trys!=3){
                console.log(`Incorrect password. Try again.`);
                
            }else if(currentPass==password){
                console.log(`User ${username} logged in.`);
                break
            }
            index++
            currentPass=(input[index])
            trys++
        }
              
        if(flag){
            break
        }
    
   
    }

}
password(['Acer','login','go','let me in','recA'])
console.log(`-------------------------------------------`);
password(['sunny','rainy','cloudy','sunny','not sunny'])
console.log(`-------------------------------------------`);
password(['momo','omom'])