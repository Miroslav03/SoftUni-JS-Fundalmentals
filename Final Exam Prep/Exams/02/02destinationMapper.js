function destination(string) {

    let pattern = /(=|\/)([A-Z][a-zA-Z]{2,})\1/g
    let split = /[=\/]/
    let matched = pattern.exec(string)
    
    let travelPoints = 0
    let destination = []
    
     while (matched) {
        let match  = matched[0].split(split).filter(a => a)
        for (let i = 0; i < match.length; i++) {
            let element = match[i];
            travelPoints += element.length
            destination.push(element)
        }
        matched = pattern.exec(string)
     }   

     console.log(`Destinations: ${destination.join(`, `)}`);
     console.log(`Travel Points: ${travelPoints}`);

} destination("=Hawai=/Cyprus/==Invalid/invalid==i5valid=/I5valid/=i=")