const throwErrorExampleFun = () => {
    let message
    let x = window.prompt('Enter a number: ')
   
    if (x == '') 
      throw 'empty'
    if (isNaN(x)) 
      throw 'not a number'
    x = Number(x)
    if (x < 5) 
      throw 'too low'
    if (x > 10) 
      throw 'too high'
  }
  try{
    throwErrorExampleFun();
  }
  catch(err){
    console.error(err);
  }

