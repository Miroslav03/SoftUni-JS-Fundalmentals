function pyramid(parameters, increment) {

    function sumArr(arr){
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            sum+=element
        }
        return sum
    }

    let totalStone = []
    let totalMarble =[]
    let totalLapis=[]
    let totalGold=[]
    let height =0

    let lapis=0
    let gold = 0
    for (let i = parameters; parameters > 0; parameters-=2) {
        if(parameters == 2||parameters==1){
            if(parameters == 2){
                height++
                gold = (parameters*parameters)*increment
                totalGold.push(gold)
                break
            }else{
                height++
            gold = increment*parameters
            totalGold.push(gold)
            break
            }
            
        }
        height++
        let stone = (parameters - 2) * (parameters - 2)
        let currentStone = stone*increment
        totalStone.push(currentStone)
        let marble = (parameters * parameters) - stone
        let currentMarble = marble*increment
        totalMarble.push(currentMarble)
        if(height%5==0){
            lapis=(parameters+parameters)+(parameters-2)+(parameters-2)
            let currentLapis = lapis*increment
            totalLapis.push(currentLapis)
            totalMarble.pop()
        }
        
    }

    let stoneSum = Math.ceil(sumArr(totalStone))
    let marbleSum = Math.ceil(sumArr(totalMarble))
    let lapisSum =  Math.ceil(sumArr(totalLapis))
    let goldSum =  Math.ceil(sumArr(totalGold))
    let totalHeight = Math.floor(height*increment) 

    console.log(`Stone required: ${stoneSum}`);
    console.log(`Marble required: ${marbleSum}`);
    console.log(`Lapis Lazuli required: ${lapisSum}`);
    console.log(`Gold required: ${goldSum}`);
    console.log(`Final pyramid height: ${totalHeight}`);


} pyramid(12, 1)