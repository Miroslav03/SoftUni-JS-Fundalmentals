function distinctArray(array) {

   
    var result = array.filter((item,x)=> array.indexOf(item)===x)
    
    return console.log(result.join(` `))


}
distinctArray([2,3,3,3,3,3])
