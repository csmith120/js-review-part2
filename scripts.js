//exercise7
console.group('exercise 7')
let person = prompt("please enter a number")

function squared(a) {
    return person * a
}
const newSqurad = squared(3);
console.log(newSqurad)

//exercise 8
console.group('exercise 8')
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const year = prompt('enter a year');

checkLeapYear(year);

//exercise 9
console.group('exercise 9')
let i = 1;
while (i <= 100) {
    console.log("number is " + i,
        i++
    )
}


//exercise 10
console.group('exercise 10')
function answer(mathFun) {
 console.log(mathFun)
}

let A = prompt("input number");
let B = prompt('input "+, -, *, /"');
let C = prompt("input another number");

A = Number(A)
C = Number(C)

if (B = '+'){
    var add = A + C;
    console.log(add);
} else if (B = '-'){
    var minus = (A - C);
    console.log(minus);
} else if (B = '/') {
    var divide = (A / C);
    console.log(divide);
} else if (B = '*') {
    var multiple = (A * C);
    console.log(multiple);
}


//exercise 11
 console.group("exercise 11")
starArray = [40,49,40,37]
starObject = 'chair'; 

var dummyString = 'dummy';
var dummyNumber = 52;
var dummyBoolean = true;
var dummyNull = null;
var dummyUndefined = undefined;
var dummyObject = starObject;
var dummyArray = starArray;

console.log(dummyString, dummyNumber, dummyBoolean, dummyNull, dummyUndefined, dummyObject, dummyArray);
 

//exercise 12

var food = [
    {name: 'raviolia', prise: 9.99},
    {name: 'cheese', prise: 3.00},
    {name: 'hamburger', prise: 10.00},
    {name: 'chair', prise: 52.00},
    {name: 'gold stake', prise:999.99}
]

var uIEL = document.getElementById("gop");
food.forEach(function(food) {
    var Lil = document.createElement('li');
    Lil.textContent = food.name + ' ' + food.prise;
    uIEL.appendChild(Lil); 
})