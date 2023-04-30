function fun(){
    count=0;
    function fun2(){
        count++;
        return count;
    }
    return fun2();
}
console.log(fun());
console.log(fun());

// const numbers = process.argv.slice(2); 
// console.log(process.argv);
// const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0); 
// console.log(sum);