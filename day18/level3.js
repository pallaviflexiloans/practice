const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const p = fetch(catsAPI);
p
.then((response)=>{
    return response.json();
})
.then((cats)=>{
    cats.forEach(cat => {
        console.log(cat.weight.metric)
    });
})
