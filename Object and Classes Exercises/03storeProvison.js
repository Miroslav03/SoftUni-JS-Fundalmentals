function storeProvision(store, order) {
    let finalQuanity = 0
    let MyStore = {

    }
    let index = 0 
    for (let i = 0; i < store.length; i += 2) {
        let storeElement = store[i]
        let storeElementQuanity = Number(store[i + 1])

        MyStore[storeElement] = storeElementQuanity
              
    }
    

    for (let j = 0; j < order.length; j+=2) {
        let orderElement = order[j]
        let orderElementQuanity= Number(order[j+1])

        if(MyStore.hasOwnProperty(orderElement)){
            MyStore[orderElement] += orderElementQuanity
        }else{
            MyStore[orderElement] = orderElementQuanity
        }
    

    
    
    }  
    for (const key of Object.keys(MyStore)) {
        console.log(`${key} -> ${MyStore[key]}`);
    }

} storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30', 'Bananas', '30'
    ]
    
    
    

)