function cards(array) {

    let players = new Map

    for (const el of array) {
        let [name, cards] = el.split(`: `)
        let cardss = cards.split(`, `)
        if (players.has(name) == false) {
            players.set(name, new Set)
        }
        for (const cards of cardss) {
            players.get(name).add(cards)
        }
    }

    for (const [player,cards] of players) {
        let sum = 0
        for (const card of cards) {
            let power
            let type 
            if(card.length>2){
             power = card[0]+card[1]
             type=card[2]       
            }else{
                power = card[0]
                type = card[1]
            }

            let first = 0
            let second = 0
            switch (power) {
                case `J`:
                    first = 11
                    break;
                case `Q`:
                    first = 12
                    break;
                case `K`:
                    first = 13
                    break;
                case `A`:
                    first = 14
                    break;
                default:
                    first = Number(power)
                    break;
            }
            switch (type) {
                case `S`:
                    second = 4
                    break;
                case `H`:
                    second = 3
                    break;
                case `D`:
                    second = 2
                    break;
                case `C`:
                    second = 1
                    break;
                default:
                    break;
                }
                let multiply = first*second     
                sum +=multiply
        }
        console.log(`${player}: ${sum}`);
    }

} cards(
    [
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ] 
)