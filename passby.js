// Primitive type are pass by value
let num1 = 5;
let num2 = 7;
function multiply( a, b){
    a = 27;
    const result = a * b ;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(num1);

// Object and Arrey are pass by reference

let student1 = {name: 'Jalim', partner: 'Alim', };
let student2 = {name: 'Raj', partner: 'Baz'}

function makeMovie(couple1, couple2){
    couple1.name = 'Ananta'
    couple2.partner = 'Mim'

}

console.log(student1, student2);

makeMovie(student1, student2);
console.log(student1, student2);

let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q); 

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}

if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);