function nameMatch(string){

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g
    let match = string.match(regex)

    console.log(match.join(` `));

}nameMatch("ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov")