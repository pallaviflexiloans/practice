const mySet = new Set(); //question1
for(let i=0;i<=9;i++){
    mySet.add(i);
}
console.log(mySet);
mySet.delete(2);
console.log(mySet);
mySet.clear();
console.log(mySet);
const namesOfAnimals = [
    "dog",
    "cat",
    "cow",
    "horse",
    "buffalo"
]
const animalSet = new Set(namesOfAnimals);
console.log(animalSet);
for(const animal of animalSet){
    console.log(animal);
}
animalSet.forEach(animal => {
    console.log(animal);
});



const countryMap = new Map();
countryMap.set("India" , 5);
countryMap.set("China", 5);
countryMap.set("Finland",7);
console.log(countryMap);
for(const pair of countryMap){
    console.log(pair);
}
for(const [k, v] of countryMap){
    console.log(k, v);
}
countryMap.forEach((_,k)=>{
    console.log(k);
});

