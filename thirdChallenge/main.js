
async function getMoviesTitles(substr, page=1) {
    const tilte = substr.toLowerCase()
    let url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`
    if (page > 1) {
      url += `&page=${page}`
    }
    
  try {
  const responseObject = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
  const response = await responseObject.json()
  const titles = response.data.map(movie => movie.Title)
  return titles.sort()
  } catch (err ){
    console.log(err);
    return 'Some error with the api ocurred'
  }
  
}

const callFunction = getMoviesTitles('spiderman', 2)

callFunction.then(console.log)