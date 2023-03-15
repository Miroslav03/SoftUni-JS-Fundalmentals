function partTime(array) {

    let vip = []
    let normal = []
  
    let element = array.shift()
  
    while (element != `PARTY`) {
      if (isNaN(element[0])) {
        normal.push(element)
      } else {
        vip.push(element)
      }
      element = array.shift()
    }
  
    let finalArr = vip.concat(normal)
  
    for (const el of array) {
      finalArr.splice(finalArr.indexOf(el), 1)
    }
  
  console.log(finalArr.length);
    for (const el of finalArr) {
      console.log(el);
    }
  } partTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
  ]
  )


