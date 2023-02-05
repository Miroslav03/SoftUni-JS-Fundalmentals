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
equalArrays([1,2,3,4,5],[1,2,1,4,5])