function RightPlace(str, char, string){

    let replace=str.replace(`_`,char)

    if(replace==string){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }

}
RightPlace('Str_ng', 'I', 'Strong')
RightPlace('Str_ng', 'i', 'String')