function wordsTracker(array) {

    let final = {}
    let words = array[0].split(` `)

    for (const el of words) {
        final[el] = 0
    }

    for (let i = 1; i < array.length; i++) {
        if (final.hasOwnProperty(array[i])) {
            final[array[i]] += 1
        }

    }

    let finalArr = Object.entries(final)

    finalArr = finalArr.sort((a, b) => b[1] - a[1])

    for (const [key, value] of finalArr) {
        console.log(`${key} - ${value}`);
    }
}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)