const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp) //question1

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
const [[country1, capital1], [country2, capital2], [country3, capital3]] = countries;
console.log(country1); 
console.log(capital1); 
console.log(country2);
console.log(capital2); 
console.log(country3); 
console.log(capital3); //question2

const rectangle = {width: 10, height: 20, color: 'blue'};
const {width, height, color} = rectangle;
console.log(width); 
console.log(height); 
console.log(color); //question3