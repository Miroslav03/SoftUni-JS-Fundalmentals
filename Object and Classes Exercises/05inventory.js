function inventory(array){
    let heroArr = []
    for (let i = 0; i < array.length; i++) {
        let [name,level,items] = array[i].split(` / `)
        level =Number(level)
        let heroes = {
            name:name,
            level:level,
            items:items
        }
        heroArr.push(heroes)
        
    }

    heroArr.sort((a,b) => a.level - b.level)

        for (const key of heroArr) {
                console.log(`Hero: ${key.name}`)
                console.log(`level => ${key.level}`) 
                console.log(`items => ${key.items}`)

        }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )