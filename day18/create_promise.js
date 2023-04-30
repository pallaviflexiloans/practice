function sum(x,y){
    prom = new Promise((s,e)=>{
        if(x<0 && y<0){
            e("x & y cannot be less than zero");
        }
        s(x+y);

    });
    return prom;
}
sum(-9,9)
.then((s)=>{
  console.log(s);
  return s+2;
})
.then((t)=>{
  console.log(t);
})
.catch((e)=>{
  console.log(e);
})