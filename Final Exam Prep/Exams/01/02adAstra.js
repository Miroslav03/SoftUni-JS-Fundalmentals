function adAstra(array) {

    let regex = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    
    let string = array[0]
    let caloriesSum = 0
    let arr = []
    let match = regex.exec(string)

    while (match) {
        caloriesSum += Number(match[4])
        arr.push({ name: match[2], date: match[3], calories: match[4] })
        match = regex.exec(string)
    }
    
    console.log(`You have food to last you for: ${Math.floor(caloriesSum / 2000)} days!`);

    for (let i = 0; i < arr.length; i++) {
        console.log(`Item: ${arr[i].name}, Best before: ${arr[i].date}, Nutrition: ${arr[i].calories}`);
    }


} adAstra(['$$#@@%^&#fish#24/12/20#85000#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
)