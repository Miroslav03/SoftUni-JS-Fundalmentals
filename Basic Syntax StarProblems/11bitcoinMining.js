function bitcoinMining(array) {
    array.unshift(`sad`)
    let bitcoinPrice = 11949.16
    let goldPrice = 67.51
    let totalMoney = 0
    let totalBitcoin = 0
    let firstDay = []

    for (let i = 1; i < array.length; i++) {
        let gold = array[i];
        let currentDayLeva = 0
        if (i % 3 == 0) {
            gold = gold * 0.7
            currentDayLeva = goldPrice * gold
        } else {
            currentDayLeva = goldPrice * gold
        }
        totalMoney += currentDayLeva

        if (totalMoney >= bitcoinPrice) {
            currentBitcoin = Math.floor(totalMoney/bitcoinPrice)
            totalBitcoin += currentBitcoin
            totalMoney -= bitcoinPrice*currentBitcoin
            firstDay.push(i)
        }

    }

    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (firstDay[0] > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay[0]}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);


} bitcoinMining([3124.15, 504.212, 2511.124])