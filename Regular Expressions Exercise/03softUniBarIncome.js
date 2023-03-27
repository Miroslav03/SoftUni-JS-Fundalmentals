function softuniBarIncomea(array) {

    let regex = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[\d+]*)\|[^|$%\d]*(?<price>\d.+)\$/g
    let splitRegex = /[\<\>\|\%\$]/

    let currentPrice = 0 
    let finalPrice = 0 

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element == 'end of shift'){
            break
        }
        if (element.match(regex)) {

            let result = regex.exec(element)

            let name = result.groups.name.split(splitRegex).filter(a => a)
            name = name[0]
            let product = result.groups.product.split(splitRegex).filter(a => a)
            product = product[0]
            let count = result.groups.count.split(splitRegex).filter(a => a)
            count = Number(count[0])
            let price = result.groups.price.split(splitRegex).filter(a => a)
            price = Number(price[0])
            
            
            currentPrice = Number((price*count))
            finalPrice += currentPrice

            console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`);
        }
    }

        console.log(`Total income: ${finalPrice.toFixed(2)}`);


} softuniBarIncomea(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']



)