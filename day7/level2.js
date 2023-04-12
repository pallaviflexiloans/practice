
function solveLinEquation(a, b, c) {
 
    if (a === 0) {
      return -c / b;
    }

    if (b === 0) {
      return -c / a;
    }
    
    return "no solution";
  }
  console.log(solveLinEquation(2,3,-5)); //question1


  function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
     if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return "The roots are " + root1 + " and " + root2;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return "The root is " + root;
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      return (
        "The roots are " +
        realPart.toFixed(2) +
        " + " +
        imaginaryPart.toFixed(2) +
        "i and " +
        realPart.toFixed(2) +
        " - " +
        imaginaryPart.toFixed(2) +
        "i"
      );
    }
  }





function printArray(Array){
    for(i=0;i<Array.length;i++){
        console.log(Array[i]);
    }
}
printArray([23,24,25,26,27]); //question3

// function showDateTime(date){
//     date = new date();
//     console.log(date);
//     console.log(date.getHours() + ":"+ date.getMinutes() + ":"+ date).getSeconds()

// }
// showDateTime(20/01/2023); //question4

function swapValues(x,y){
   temp = x;
   x=y;
   y=temp;
}
swapValues(2,3);// question5

function reverseArray(Array){
    for(i=Array.length-1;i>=0;i--){
        console.log(Array[i]);
    }
}
reverseArray([23,25,26,27,28]);   //question6

function capitalizeArray(Array){
    upperArray=[];
    for(i=0;i<Array.length;i++){
        upperArray.push(Array[i].toUppercase());
    }
    return upperArray;
}
console.log(capitalizeArray(["Pallavi","Avyaan"]));


