function towns(array) {



    for (const current of array) {
        let arr=current.split(` |`)
        let name = arr[0]
        let latitude = Number(arr[1]).toFixed(2)
        let longitude = Number(arr[2]).toFixed(2)
        let town = {
            town: name,
            latitude: latitude,
            longitude: longitude

        }
        console.log(town);
        
    }

} towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)