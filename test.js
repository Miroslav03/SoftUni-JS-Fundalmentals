//Lab Tu Plovdiv N
function sortArrayHighestToLowest(array1){
  console.log(array1);
  let emptyArr=[]
  for (let j = 0; j < array1.length; j++) {
    let element1 = array1[j];
    let currentHighest=element1
    for (let k = j+1; k < array1.length; k++) {
      let element2 = array1[k];
      if(element2>currentHighest){
        currentHighest=element2
        
      }
    }
    emptyArr.push(currentHighest)
    array1.pop(currentHighest)
    j-=1
  }

  console.log(emptyArr);

}sortArrayHighestToLowest

function students(){
  let buffArr=[]
  let arrNumberStudents=[1,2,3,4,5]
  let arrAverageGrades=[4,4,6,4,3]
    let sum=0
  for (let i = 0; i < arrAverageGrades.length; i++) {
    let element=arrAverageGrades[i]
    sum+=element

  }
    sum=(sum/arrNumberStudents.length)

    for (let j = 0; j < arrAverageGrades.length; j++) {
       let currentGrade = arrAverageGrades[j]
       if(currentGrade>sum){
          buffArr.push(arrNumberStudents[j])  
       }
      
    }
    console.log(sum);
    console.log(buffArr);
}students

function equalArrays(arr1,arr2){
  let checker=false
  for (let i = 0; i < arr1.length; i++) {
    let firstElement = arr1[i];
    let secondElement = arr2[i]
    if(firstElement==secondElement){
      checker=true
    }else if(firstElement!=secondElement){
      checker=false
      break;
    }

  }
  console.log(checker);
}
equalArrays //([1,2,3,4,5],[1,2,1,4,5])

function chekIfNumIsNegative(n1,n2,n3){
   
    let sign=`Positive`
    let isNumNegative=n1<0
    sign = chekAndChangeSigh(sign,isNumNegative)
    
    let isNum2Negative=n2<0
    sign = chekAndChangeSigh(sign,isNum2Negative)
    
    let isNum3Negative=n3<0
    sign = chekAndChangeSigh(sign,isNum3Negative)

    return sign

    function chekAndChangeSigh(sign,shouldChange){s
        if(shouldChange===false){
          return sign;
        }

        if(sign==`Positive`){
          sign=`Negative`
        }else{
          sign=`Positive`
        }
        return sign;
    }

}console.log(chekIfNumIsNegative(-1,-2,3))