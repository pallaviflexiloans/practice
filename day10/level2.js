const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a,...b];
console.log(c);
const unionSet = new Set(c);
const differentUnionSet = new Set();
c.forEach((num)=> {
    differentUnionSet.add(num);
})
const intersectionSet = new Set();
a.forEach((num)=>{
    if(b.includes(num)){
        intersectionSet.add(num);
    }
})
console.log(intersectionSet);