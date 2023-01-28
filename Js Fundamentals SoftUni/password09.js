
//You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console:
// "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in." 
//However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
//The input comes as an array of strings - the first string represents username and each subsequent string is a password.

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