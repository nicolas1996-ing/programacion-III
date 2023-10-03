for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
  
  // Language: javascript
  let n = 0;
  while (n < 10) {
    n++;
    console.log(`n = ${n}`);
  }
  
  // console ?
  
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let i = 0;
  let text = "";
  
  while (cars[i]) {
    text += `➡${cars[i]}`;
    i++;
  }
  
  console.log(text); // ?
  
  // imprimir los numeros del 1 al 100 en forma descendente y ascendente
  
  // ascendente
  let counterOne = 1;
  while (counterOne <= 100) {
    console.log(counterOne);
    counterOne++;
  }
  
  // descendente
  let counterTwo = 100;
  while (counter >= 1) {
    console.log(counter);
    counter--;
  }
  
  // for example
  const carsBrands = ["BMW", "Volvo", "Saab", "Ford"];
  for (let i = 0; i < carsBrands.length; i++) {
    console.log(carsBrands[i]);
  }
  
  // example 2
  // print in console the numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  
  // example 3
  // print in console the numbers from 100 to 1
  for (let i = 100; i >= 1; i--) {
    console.log(i);
  }
  
  for (let table = 1; table < 11; table++) {
    console.log(`Tabla del ${table} ➡ `);
    for (let multiply = 1; multiply < 9; multiply++) {
      console.log(`${table} x ${multiply} = ${table * multiply}`);
    }
  }
  