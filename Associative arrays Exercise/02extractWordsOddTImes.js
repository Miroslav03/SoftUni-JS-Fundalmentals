function extractWords(sentance){
    let obj = {}

    let finalSentance = sentance.toLowerCase(sentance)
    let arr = finalSentance.split(` `)
    let str=``
    for (const el of arr) {
       if(obj.hasOwnProperty(el)==false){
        obj[el] = 1
       }else{
        obj[el] +=1
       }
    }

    let finalArr = Object.entries(obj).sort((a,b) => b[1] - a[1])

    for (const [key,value] of finalArr) {
        
        if(value%2!=0){
            
            str = str + ` ` + key
        }
    }
    console.log(str);

}extractWords('Cake cake cake cake is Soft CAKE sweet Food')