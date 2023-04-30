function outer() {
    let c = 12;
    function inner1() {
        return (c + 1);
    }
    function inner2() {
        return (c + 2);
    }
    function inner3() {
        return (c + 3);
    }
    c=16;
    return {
        inner1 : inner1(),
        inner2 : inner2(),
        inner3 : inner3()
    };

}
const o = outer();
console.log(o.inner1);
console.log(o.inner2);
console.log(o.inner3);
