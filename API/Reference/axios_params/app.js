// The icndb.com API is unreliable
// use the chucknorris.io API instead
// API URL: https://api.chucknorris.io/jokes/random

// use the colt video as a reference
// send a GET request to the API URL with a {category} parameter

// valid categories are: 
// ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]

async function getJoke(category) {
  let url = 'https://api.chucknorris.io/jokes/random';
  try {
    let response = await axios.get(url, { params: { category } })
    return response
  } catch (err) {
    throw new Error('URL invalid')
  }
};

// send a GET request to search for jokes with a {query} parameter
async function searchJokes(query) {
  let url = 'https://api.chucknorris.io/jokes/search';
  try {
    let response = await axios.get(url, { params: { query } })
    return response
  } catch (err) {
    throw new Error('Invalid query string')
  }
};


console.log(getJoke('explicit'))
// console.log('animal')
// console.log('career')