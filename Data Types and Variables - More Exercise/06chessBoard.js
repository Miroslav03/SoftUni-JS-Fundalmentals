function chessBoard(num){

    console.log(`<div class="chessboard">`);
    let flag = `black`
    for (let i = 1; i <= num; i++) {
        console.log(`  <div>`);
        for (let j = 1; j <= num; j++) {
            if(j%2!=0&&flag==`black`){
                console.log(`    <span class="black"></span>`);
            }else if(j%2!=0&&flag==`white`){
                console.log(`    <span class="white"></span>`);

            }else if(j%2==0&&flag==`black`){
                console.log(`    <span class="white"></span>`);
            }else if(j%2==0&&flag==`white`){
                console.log(`    <span class="black"></span>`);
            }
            
        }
        console.log(`  </div>`);
        if(flag == `black`){
            flag = `white`
        }else{
            flag = `black`
        }
    }
    console.log(`</div>`)


}chessBoard(4)