let nota_one = 10;
let nota_two = 5;
let nota_three = 10;
let average = (nota_one + nota_two + nota_three) / 3;

if (average < 5) {
  console.log("suspenso");
} else if (average >= 5 && average <= 7) {
  console.log("aprobado");
} else {
  console.log("notable");
}
