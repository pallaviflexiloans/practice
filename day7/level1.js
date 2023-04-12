function fname(name){
    console.log(name);
}
fname("pallavi"); //question1

function fullName(firstname,lastname){
    space = " ";
    return fullName = firstname+space+lastname;
}
fullName("pallavi","sharma");
console.log(fullName);  //question2

function addNumbers(firstNo, secondNo){
    return firstNo+secondNo;
}
console.log(addNumbers(34,4)); //question3
function areaRectangle(length,width){
    return area = length*width;

}
console.log(areaRectangle(4,6)); //question4
function perimeterRectangle(length,width){
    return perimeter= 2*(length + width);
}
console.log(perimeterRectangle(2,3)); //question5

function volumeOfRectangularPrism(length,width,height){
   return volume = length * width * height;
}
console.log(volumeOfRectangularPrism(2,3,5)); //question6

function areaCircle(r){
    const pi = 3.14;
    return area = pi * r * r;
}
console.log(areaCircle(2)); // question7
function circumferenceOfCircle(radius){
    const pi = 3.14;
    return 2*pi*radius;
}
console.log(circumferenceOfCircle(2)); //question8

function densityOfSubstance(mass,volume){
    return density= mass/volume;
}
console.log(densityOfSubstance(4,2)); //question9

function calculateSpeed(distance,time){
    return speed = distance/time;
}
console.log(calculateSpeed(4,2)); // question10

function weightOfSubstance(mass,gravity){
    return weight = mass * gravity;
}
console.log(weightOfSubstance(2,4)); //question11

function convertCelsiusToFahrenheit(oC){
    return  oF = (oC * 9/5) + 32;
}
console.log("temperature in fahrenheit is " + convertCelsiusToFahrenheit(2)); //question12

function calculateBMI (weightInKg,height){
    bmi = weightInKg / (height * height);       
    if( bmi < 18.5)
        return "Underweight";
    else if(18.5>=bmi<25)
        return "Normal";
    else if(25>=bmi<30)
        return "Overweight";
    else
        return "Obese";
}

console.log("calling calculateBMI " + calculateBMI(55,5.5)); //question13 

function checkSeason(month){
    winter = ['January', 'February', 'March'];
    spring = ['April', 'May', 'June'];
    summer = ['July', 'August', 'September'];

    if (winter.includes(month))
        return season = 'winter'
    else if (spring.includes(month))
        return season = 'spring'
    else if (summer.includes(month))
        return season = 'summer'
    else
        return season = 'autumn'
}

console.log("calling checkSeason " + checkSeason("April")); //question14

function findMax(firstNo,secondNo,thirdNo){
    if(firstNo>secondNo && firstNo>thirdNo){
        return firstNo;
    }
    else if(secondNo>firstNo && secondNo>thirdNo){
        return secondNo;
    }
    else{
        return thirdNo;
    }
}
console.log("max no is : " + findMax(23,24,25));//question15







function reverseArray( array ){
    reverseArray = [];
    for(i=array.length-1;i>=0;i--){
         reverseArray.push(array[i]);
    }
    return reverseArray;
}
reverseArray([23,25,26,27]);
console.log(reverseArray);

