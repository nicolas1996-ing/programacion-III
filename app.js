console.log("console.log -> helllo wrorld");
const TOKEN = "1234567890";

let counter = 10;
console.log("valor de counter = ", counter);
counter = "veinte";
console.log("valor de counter = ", counter);

let a = 10;
let b = 20;
let c = 30;
let d = a + b + c;
let e = a * b;
let f = a / b;
let g = a - b;
let h = a % b;
console.log("console.log -> d", d); // 60
console.log("console.log -> e", e); // 200
console.log("console.log -> f", f); // 0.5
console.log("console.log -> g", g); // -10
console.log("console.log -> h", h); // 10

// operadores logicos
console.log(a == b);
console.log(a != b);
console.log(a > b); // false
console.log(a < b); // true
console.log(a && b); // false
console.log(a || b); //

console.log("====================================");
let condicion = false;
if (condicion) {
  console.log("console.log -> condicion", condicion);
  console.log("console.log -> condicion", condicion);
  console.log("console.log -> condicion", condicion);
  console.log("console.log -> condicion", condicion);
  console.log("console.log -> condicion", condicion);
} else {
  console.log("this is an error");
}

// types of console
console.log("====================================");
console.log("console.log -> d", d); // normal
console.log(`console.log -> d = ${d}`); // template literals
console.log({ d }); // object
console.log(`%c d.value = ${d}`, "color: white; font-weight: bold"); // css
console.warn("console.warn -> d", d); // warning
console.error("console.error -> d", d); // error
console.table({ a, b, c, d }); // table

// // concatination
// let wordA = "Hello";
// let wordB = "World";
// let gretting = wordA + " " + wordB;
// console.log("console.log -> wordA + wordB =", gretting);
