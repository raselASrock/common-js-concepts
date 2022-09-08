function sum( a, b, c){
    const args = [...arguments]
    console.log(arguments);
    console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 52, 75, 45,96,45,78,21,42)
console.log(total);
console.log(typeof sum);
console.log(sum.length);