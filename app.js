const pResult = document.querySelector("#p-result");
console.log(pResult);
const number = prompt("usuario ingrese un numero aquí !");
console.log(number);

pResult.innerHTML = `el numero ingresado es ${number}`;
