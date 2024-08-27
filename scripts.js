//exercise7
let person = prompt("please enter a number")

function squared(a) {
    return person * a
}
const newSqurad = squared(3);
console.log(newSqurad)

//exercise 8
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
