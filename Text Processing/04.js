function counting(string, word) {
    let count = 0
    let words = string.split(` `)

    for (const el of words) {
        if (el == word) {
            count++
        }
    }
    console.log(count);


} counting('softuni is great place for learning new programming languages',
'softuni'

)