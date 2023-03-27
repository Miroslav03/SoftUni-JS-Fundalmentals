function race(array) {
    let finalSum = 0
    let nameArr = array.shift().split(`, `);
    let personList = new Map;

    for (const person of nameArr) {
        personList.set(person,0)
    }

    let numberRegex = /\d+/g;
    let letterRegex = /[a-zA-Z]+/g

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let name = ``
        if (element == 'end of race') {
            break;
        }

        let words = element.match(letterRegex)
        let numbers = element.match(numberRegex)

        for (let letter of words) {
            name += letter
        }
        for (let number of numbers) {
            let twoDigit = 0
            if (number.length > 1) {

                for (let single of number) {
                    single = Number(single)
                    twoDigit += single
                }
                finalSum += twoDigit
            }else{
                number = Number(number)
                finalSum += number
            }
        }
        if (personList.has(name)) {
            let currentKm = personList.get(name)
            personList.set(name,currentKm + finalSum)
        }
        finalSum = 0 
    }

    let sortedMap = new Map([...personList.entries()].sort((a,b) => b[1] - a[1]))
    let finalArr  =[]

    for (const el of sortedMap) {
        finalArr.push(el[0])
    }

    console.log(`1st place: ${finalArr[0]}`)
    console.log(`2nd place: ${finalArr[1]}`)
    console.log(`3rd place: ${finalArr[2]}`)
    

  
} race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)