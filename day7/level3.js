function factorial(number){
    fact=1;
    for(i=1;i<=number;i++){
        fact = fact*i
    }
    return fact;
}
console.log(factorial(3)); //question9

function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 
console.log(sum(2, 3)); //question12

function sum() {
    var s = 0;
    var avg;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];

    }
    return avg = s/arguments.length;
}
 
console.log(sum(2, 3)); //question13

function isPrime(number){
    let isPrime = true;
if (number === 1) {
    console.log("1 is not prime .");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
}
return isPrime;
}
console.log(isPrime(23)); //question15

function reverseCountries(countries){
    const reverseCountriesArray =[];
    for(i=countries.length-1;i>=0;i--){
         reverseCountriesArray.push((countries[i]));
    }
    return reverseCountriesArray
    
}
console.log(reverseCountries(["india","finland","france"]));



