console.log("2023-10-02");
let nameStudent = "william";
let gender = "M"; // M || F
let group = ""; // A || B

let conditionOne = gender == "F" && nameStudent.charAt(0).toLocaleLowerCase() < "m";
let conditionTwo = gender == "M" && nameStudent[0].toLocaleLowerCase() > "n";

if (conditionOne || conditionTwo) {
  group = "A";
} else {
  group = "B";
}

console.log(group);
