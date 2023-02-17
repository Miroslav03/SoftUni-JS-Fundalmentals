function lastKNumbersSequence(n, k) {
    let arr = [1];
 
    while (arr.length < n) {
        let element = arr
            .slice(- k)
            .reduce((sum, currEl) => sum += currEl, 0);
 
        arr.push(element);
    }
 
    return console.log(arr.join(' '));
}lastKNumbersSequence(5,5)
