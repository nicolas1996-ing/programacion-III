// if conditional statement can be used to execute a block of code if a specified condition is true.
// if condition is false, another block of code can be executed.( else )
// else if condition can be used to specify a new condition to test, if the first condition is false.
// switch statement can be used to perform different actions based on different conditions.

// example if
const condition = 4;
if (condition > 5) {
  console.log("la condición es verdadera");
} else {
  console.log("la condición es falsa");
}

// example else if
let counter = 100;
if (counter < 10) {
  console.log("counter es menor que 10");
} else if (counter > 10) {
  console.log("counter es mayor que 10");
} else {
  console.log("counter es igual a 10");
}

/*
  declarar la variable age , asignarle un valor numerico 
  y evaluar si es mayor de edad. 

  mayor de edad cuando age es mayor o igual a 18 
*/

// multiple else if
let number = 10;
if (number == 1) {
    console.log("Lunes");
} else if (number == 2) {
    console.log("Martes");
} else if (number == 3) {
    console.log("Miercoles");
} else if (number == 4) {
    console.log("Jueves");
} else if (number == 5) {
    console.log("Viernes");
} else if (number == 6) {
    console.log("Sabado");
} else if (number == 7) {
    console.log("Domingo");
} else {
    console.log("No es un dia de la semana");
}

// using switch
let day = 3;
switch (day) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("No es un dia de la semana");
    break;
}
