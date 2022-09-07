/* 
8 ways to get undefined value
1. variable that is not initialized will give undefined.
2. function with no return.
3. parameter that is not passed will be undefined.
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing arrey elements outside of the index range.
7. deleting an element inside an arrey
8. set a value directly to undefined
*/


1.
let a;
console.log(a); 



2.
function second (a,b){
    let total = a + b;
}

let result = second()
console.log(result);
 


3.
function third(a,b,c,d,e){
    const total = a+b+c+d+e;
    console.log(a,b,c,d,e);
}

third(4,9)
 




4.
function noNegative(a,b){
    if( a < 0 || b < 0){
        return
    }
    return a+b
}

const total = noNegative(5,-7)
console.log(total); 




5.
const fifth = {id: 520, name:'ponchom', age: 40}
console.log(fifth.age, fifth.salary); 


6.
const sixth = [35,42,96,48,75,34,19];
console.log(sixth[5], sixth[7], sixth[60]); 



7.
const sixth = [35,42,96,48,75,34,19];
You should not use. Instead use slice
delete sixth[2]
console.log(sixth[2] ,sixth[5], sixth[7], sixth[60]); 
console.log(sixth); 

const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null,}

console.log(typeof undefined, typeof null);