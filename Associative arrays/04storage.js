function storage(input) {
    let storage = new Map()

    for (const el of input) {
        let currentProduct = el.split(` `)
        let [product,quantity] = currentProduct
        quantity= Number(quantity)

        if(storage.has(product)){

            let currentQuanity = Number(storage.get(product))
            storage.set(product, quantity+currentQuanity)
        }else{
            storage.set(product, quantity)
        }
    }


    for (const [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
} storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)