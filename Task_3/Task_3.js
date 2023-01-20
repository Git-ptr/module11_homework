function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(7);
console.log( f(0), f(77), f(12) );

console.log( sum(9)(17), sum(4)(2), sum(57)(2) );