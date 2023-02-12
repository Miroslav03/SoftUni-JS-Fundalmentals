function addAndSubtract(n1,n2,n3){
    let subtract = (a,b) => a-b
    let sum =  (a,b) =>  a+ b 

    let finalSum=sum(n1,n2)
    let finalSubtraact=subtract(finalSum,n3)

    return finalSubtraact

}addAndSubtract(23,6,10)