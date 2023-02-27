function blackFlag(input) {

    let days = Number(input[0])
    let plunderForDay = Number(input[1])
    let expextedPludner = Number(input[2])

    let totalPlunder = 0

    for (let i = 1; i <= days; i++) {
        totalPlunder += plunderForDay
        if (i % 3 == 0) {
            totalPlunder += plunderForDay*0.5
        }
        if(i % 5 == 0){
            totalPlunder=totalPlunder-(totalPlunder*0.3)
        }

    }
    if(totalPlunder>=expextedPludner){
        return console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        return console.log(`Collected only ${((totalPlunder/expextedPludner)*100).toFixed(2)}% of the plunder.`);
    }

} blackFlag(["10",
"20",
"380"])
