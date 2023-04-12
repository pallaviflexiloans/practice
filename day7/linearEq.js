function solveLinEquation(a, b, c) {
 
    if (a === 0) {
      return -c / b;
    }

    if (b === 0) {
      return -c / a;
    }
    
    return "no solution";
  }
  console.log(solveLinEquation(2,3,-5));