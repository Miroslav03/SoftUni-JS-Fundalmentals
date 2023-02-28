function SortAnArray(array) {

    array.sort(function (a, b) {
        if (a.length - b.length == 0) {
            return a.localeCompare(b)
        }
        return a.length - b.length
    })

    return console.log(array.join(`\n`));

} SortAnArray(['alpha', 'beta', 'gamma'])