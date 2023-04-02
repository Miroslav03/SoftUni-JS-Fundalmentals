function problem(array) {

    let collection = {}
    let dislikeCount = 0
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(`-`);
        let command = element[0]
        let name = element[1]
        let meal = element[2]

        switch (command) {
            case `Like`: {
                if (!collection.hasOwnProperty(name)) {
                    collection[name] = {
                        meal: []
                    }
                    collection[name].meal.push(meal)
                } else {
                    if (collection[name].meal.includes(meal)) {
                        break
                    } else {
                        collection[name].meal.push(meal)
                    }
                }
                break;
            }
            case `Dislike`: {
                if (!collection.hasOwnProperty(name)) {
                    console.log(`${name} is not at the party.`);
                } else {
                    if (collection[name].meal.includes(meal)) {
                        dislikeCount++
                        collection[name].meal = collection[name].meal.filter(a => a != meal)
                        console.log(`${name} doesn't like the ${meal}.`);
                    } else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                }
                break;

            } case `Stop`: {
                for (const [name,arr] of Object.entries(collection)) {
                    let mealArr = arr.meal
                    
                    let meals = mealArr.join(`, `)
        
                    console.log(`${name}: ${meals} `);
                }
                console.log(`Unliked meals: ${dislikeCount}`);
                return
            }

        }
    }


} problem(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])


