const url = 'https://restcountries.com/v2/all' 
const p = fetch(url);
  p.then((response) => response.json()) 
  .then((data) => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error))