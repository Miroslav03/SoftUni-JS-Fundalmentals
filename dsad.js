function solve(input) {
  let movies = [];
  input.forEach(info => {
      if (info.includes(`addMovie`)) {
          let name = info.split(`addMovie`)[1]
          movies.push({ name })
      } else if (info.includes(`onDate`)) {
          let [name, date] = info.split(` onDate `)
          let movie = movies.find(el => el.name === name)
          if (movie) {
              movie.date = date;
          }
      } else if (info.includes(`directedBy`)) {
          let [name, director] = info.split(` directedBy `)
          let movie = movies.find(el => el.name === name);
          if (movie) {
              movie.director = director
          }

      }
  })
  movies.forEach(movie => {
      if (movie.name && movie.date && movie.director) {
          console.log(JSON.stringify(movie))
      }
  });

}
function solve([
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