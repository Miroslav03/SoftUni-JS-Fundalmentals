function movies(array){
    let currentMOvie= {

    }
    let movies = []

    let name =``
    let director=``
    let date=``
    let comands
    for (let i = 0; i < array.length; i++) {
        let element = array[i]

        if(element.includes("addMovie")){
            name = element.split(`addMovie `)
        
            movies.push({ name: name[1] })

        }else if(element.includes("directedBy")){
            comands = element.split(` directedBy `)

            name= comands[0]
            director = comands[1]

            const movie = movies.find((m) => m.name === name);
            if (movie) {
                movie.director = director;
                }

        }else if(element.includes("onDate")){
            comands = element.split(` onDate `)
            
            name = comands[0]
            date = comands[1]

            let movie = movies.find(m => m.name == name)
            if(movie){
                movie.date = date
            }
        }
    }

    let filterArr = movies.filter( m => m.name && m.director && m.date)
    for (const el of filterArr) {
        console.log(JSON.stringify(el));
    }
}movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )