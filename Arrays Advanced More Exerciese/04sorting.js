function sorting(array) {
    array.sort((a,b) => a - b )
    let numbersLength = array.length
    let finalArr=[]

  for (let i = 0; i < numbersLength/2; i++) {
    finalArr.push(array.pop())
    finalArr.push(array.shift())
  }
  return console.log(finalArr.join(` `));
} sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])