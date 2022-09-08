/* for( var i = 0; i < 5; i++){
    console.log(i);
}
console.log( 'Outside', i); */


for( let i = 0; i < 5; i++){
    console.log(i);
}
// console.log( 'Outside', i);

function print5(){
    console.log( 'Function Print', 5);
}
print5()

const print10 = function(){
    console.log('Inside print ', 10);
}
print10()