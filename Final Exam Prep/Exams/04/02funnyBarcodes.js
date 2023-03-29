function funnyBarcode(array) {

    let regex = /@(#{1,})([A-Z]([a-zA-Z0-9]){4,}[A-Z])@(#{1,})/g

    let barcodeNumber = Number(array.shift())
    let numberRegex = /\d/g
    let group = 0 

    for (let i = 0; i < barcodeNumber; i++) {
        let element = array[i];
        if(element.match(regex)){
            let numbers = element.match(numberRegex)
            if(numbers === null){
                group = `00`
                console.log(`Product group: ${group}`);
            }else{
                group = numbers.join(``)
                console.log(`Product group: ${group}`)
            }
        }else{
            console.log(`Invalid barcode`);
        }
    }


} funnyBarcode(["3",
"@#FreshFisH@#",
"@###B11,,,,1111D@###",
"@##Che4s6E@##"])

