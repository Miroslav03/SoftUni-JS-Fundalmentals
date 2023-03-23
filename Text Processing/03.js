function censored(text,word){
    let censored = (`*`.repeat(word.length))


   while(text.includes(word)){
        text = text.replace(word,censored)
   }

   console.log(text);

}censored('Find the hidden word', 'hidden')