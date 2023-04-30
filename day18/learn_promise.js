// function sum(a,b){
//     return a+b;
// }
// const s = sum(12,13);
// console.log(s);

// const sum2 = async function sumAsyn(x,y){
//         return x+y;    
// }
// const sa = await sum2(23,24);
// console.log(sa);
// (async() => {   const value = await square(2)
//     console.log(value)});
const square = async function (n) {
    return n * n
  }

const init = async function () {
    const value =  await square(2);
    console.log("abcd");
    console.log(value);
}
//init();
console.log(square(3));
square(4)
.then((s)=>{
  console.log(s);
  return s+2;
})
.then((t)=>{
  console.log(t);
})
.catch((e)=>{
  console.log("error");
})
const value = await square(8);
console.log(value);