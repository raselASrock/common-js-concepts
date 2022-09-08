function greeting(greetingHandler, name){
    greetingHandler(name)
}
const name = 'Halim Mama';
const number = 35;
const numbers = [35,45,76,95,49,83,19];
const laptop = {price: 45000 , brand: 'Lenovo' , memory: '8 GB'};




function greetingHandler(name){
    console.log('Good Morning', name);
}


function greetEvening(name){
    console.log('Good Evening', name);
}


function greetNight(name){
    console.log("Good Night", name);
}

greeting(greetingHandler, 'Tom Crues')
greeting(greetingHandler, 'Tom Hank')
greeting(greetingHandler, 'Tom Brandy')
greeting(greetEvening, 'Sakib Khan')
greeting(greetEvening, 'Sakib Al Hasan')
greeting(greetEvening, 'Ananta Jalil')
greeting(greetEvening, 'Salman Khan')
greeting(greetNight, 'Rasel')
greeting(greetNight, 'Momin')
greeting(greetNight, 'Tomal')


function submitHandler(){
    console.log('Submit Button Clicked');
}

document.getElementById('btn-primary').addEventListener('click', submitHandler)