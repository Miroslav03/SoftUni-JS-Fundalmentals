function furniture(array) {

    let pattern = />>(?<name>[A-Z][A-z]+)<<(?<price>[\d.]+)!(?<quanity>\d+)/

    let nameArr = []
    let totalMoney = 0

    for (const el of array) {

        if (el == "Purchase") {
            break
        }

        if (el.match(pattern)) {
            let product = pattern.exec(el)

            let name = product.groups.name
            let price = Number(product.groups.price)
            let quanity = Number(product.groups.quanity)

            nameArr.push(name)
            let currentMoney = price * quanity
            totalMoney +=currentMoney

        } else {
            continue
        }
    }

    if (nameArr.length >= 1) {
        console.log('Bought furniture:');
        console.log(nameArr.join(`\n`));
        console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
    } else {
        console.log('Bought furniture:')
        console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
    }

} furniture(
    [
        ">>Sofa<<312.23!3",
        ">>TV<<300!5",
        ">Invalid<<!5",
        ">>Kettle<<22.50!2",
        "Purchase"
    ]
)
