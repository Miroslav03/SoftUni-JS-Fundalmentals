function factorialDevision(n1,n2){
    let Upper=1
    let Lower=1

    function firstNum(){
        for (let i = n1; i >= 1; i--) {
            Upper=Upper*i 
        }
        return Upper
    }

    function secondNum(){
        for (let i = n2; i >= 1; i--) {
            Lower=Lower*i
            
        }
        return Lower
    }

    return console.log((firstNum()/secondNum()).toFixed(2))

}factorialDevision(5,2)