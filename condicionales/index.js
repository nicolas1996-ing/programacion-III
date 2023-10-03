console.log("hello ciaf 2023-09-18");

console.log("10" == 10); // true
console.log("10" === 10); // false

const letter = nameOne[7];
console.log(letter);

const nameOne = " juan alberto ";
const subString = "ANDRES";
// console.log(nameOne.includes(subString));
console.log(nameOne);
console.log(nameOne.trim());

///

let day = 0;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

console.log(new Date().getFullYear());
console.log(new Date().getDate());
console.log(new Date().getMinutes());
console.log(new Date().getMilliseconds());
