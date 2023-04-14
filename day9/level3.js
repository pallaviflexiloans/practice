const countries = [
	{country: 'England',capital:'london', population:1000000},
	{country: 'India',capital:'delhi', population:10023330000},
	{country: 'Nepal',capital:'kathmandu', population:100000},
	{country: 'Pakistan',capital:'islamabad', population:10000300}
]

//country
const res1= countries.sort((a,b)=>{
	if (a.country < b.country) 
		return -1
  	if (a.country > b.country) 
  		return 1
  	return 0
})
console.log(res1);

//capital
const res2= countries.sort((a,b)=>{
	if (a.capital < b.capital) 
		return -1
  	if (a.capital > b.capital) 
  		return 1
  	return 0
})
console.log(res2);

//population
const res3= countries.sort((a,b)=>{
	if (a.population < b.population) 
		return -1
  	if (a.population > b.population) 
  		return 1
  	return 0
})
console.log(res3); //question1


const countries1 =[
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},

{country:'Swahili',count:4}
]
const mostSpokenLanguages =  (countries,n) =>{
    const sortedCountry = countries.sort((a,b)=>{
        if (a.count>b.count){
            return -1;
        }
        if(a.count<b.count){
            return 1;
        }
        return 0;
    });
    return sortedCountry.slice(0, n);
}

console.log(mostSpokenLanguages(countries1, 5)); //question2

const statistics = {
    ages : [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
    sum: function() {
      return this.ages.reduce((acc, cur) => acc + cur, 0);
    }
  };

//question4






