/*forEach is used for iterating over an array and executing a code block for each element, 
map is used for transforming each element of an array and returning a new array, 
filter is used for returning a new array with only the elements that satisfy a certain condition,
 and reduce is used for reducing an array to a single value by accumulating a result while iterating over an array.*/



const countries = [
	{country: 'England',capital:'london', population:1000000},
	{country: 'India',capital:'delhi', population:10023330000},
	{country: 'Nepal',capital:'kathmandu', population:100000},
	{country: 'Pakistan',capital:'islamabad', population:10000300}
]
countries.forEach(Element =>  console.log(Element.country)); //question3

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
names.forEach(name => console.log(name)); //question4

const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriesToUpperCase = countries1.map((country) => country.toUpperCase());
  console.log(countriesToUpperCase);      //question6

  const countryLengths = countries1.map(country => country.length);

console.log(countryLengths); //question7
const products = [
    { name: 'iPhone', price: 999 },
    { name: 'Books', price: 899 },
    { name: 'Toys', price: 699 },
    { name: 'Clothes', price: 699 }
  ];
  
  const prices = products.map(product => product.price);
  
  console.log(prices); //question10

  const countriesContainingLand = countries1.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand); //question11

const countriesHavingSixCharacter = countries1.filter((country) => 
country.length==6
);
console.log(countriesHavingSixCharacter); //question12

const countryStartsWithE = countries1.filter((country)=> 
country.startsWith("E")
);
console.log(countryStartsWithE); //question13

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum) //question17

const concantenateCountries = countries1.reduce((acc,curr) => acc +", "+ curr, "" );
console.log(concantenateCountries); //question18

/*The every() array method in JavaScript is used to check if all the elements of the array satisfy the callback function condition or not.
 The some() array method in JavaScript is used to check if at least one of the elements passes the callback test or not.*/


const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const someNameGreaterThan7 = names1.some((name) => name.length>7) // Are all strings ?
console.log(someNameGreaterThan7); //question20

const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === false)

console.log(areSomeTrue) //true

/*the find method returns the element value, but the findIndex method returns the element index.*/
//question22

const sixLetterCountry = countries1.find(((country) => country.length == 6))
console.log(sixLetterCountry); //question25
const sixLetterCountryIndex = countries1.findIndex((country) => country.length == 6)
console.log(sixLetterCountryIndex)//question26





