
/* 
A. Truthy:
    1.true
    2. any number (+ve, -ve) will be truthy other than 0 (ZERO)
    3. any string other than empty string ('');
    4. '0' , "false"
    5. {} Empty Object
    6. [] Empty Arrey



B. Falsy:
    1. false.
    2. ZERO (0)
    3. Empty String ("")
    4. undefined
    5. null
*/


/* const x = false;
if(x){
    console.log('Value of X is truthy');
}
else{
    console.log('Value of X is falsy');
} */


/* const x = '0';
if(x){
    console.log('Value of X is truthy');
}
else{
    console.log('Value of X is falsy');
} */


/* let x;
console.log(x);

if(x){
    console.log('Value of X is truthy');
}
else{
    console.log('Value of X is falsy');
} */


/* let x = null;
console.log(x);

if(x){
    console.log('Value of X is truthy');
}
else{
    console.log('Value of X is falsy');
} */


/* let x = {};
console.log(x);

if(x){
    console.log('Value of X is truthy');
}
else{
    console.log('Value of X is falsy');
} */


/* let x = [];
console.log(x);

if(x){
    console.log('Value of X is truthy');
}
else{
    console.log('Value of X is falsy');
} */

// Optional 
// Check Falsy

/* const y = "";
if( !y){
    console.log('value is falsy');
} */

// Check Truthy
const z = " ";
if(!! z){
    console.log('value is truthy');
}