function order(products, quanity) {
    let price = 0
    switch (products) {
        case `coffee`:
            price = 1.5
            break;
        case `water`:
            price = 1
            break;
        case `coke`:
            price = 1.4
            break;
        case `snacks`:
            price = 2
            break;
        default:
            break;
    }

    
    return((quanity*price).toFixed(2))
}order(`water`,5)