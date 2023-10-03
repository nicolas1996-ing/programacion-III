console.log("2023-10-02");
const fruits = ["apple", "banana"];

// length
console.log(`the fruits arr length is: ${fruits.length}`);
// push
fruits.push("lemon");
console.log(fruits);
let lengthArr = fruits.push("pinapple");
console.log(fruits);
console.log(lengthArr);
// shift
fruits.shift();
let elmShift = fruits.shift();
console.log(fruits);
console.log(elmShift);

// pop
fruits.pop();
console.log(fruits);
const elmPop = fruits.pop();
console.log(fruits);
console.log(elmPop);

// indexOf
fruits.push("apple");
fruits.push("lemon");
fruits.push("pineapple");
fruits.push("strawberry");
console.log(fruits);
console.log(fruits.length);
const idxLemon = fruits.indexOf();
console.log(idxLemon);

const number = [0, 1, 2];
const strNumbers = [];

const elements = [1, 2, 3, 4];
console.log(elements.join("****"));

//
const car = {
  brand: "mazda",
  model: 2023,
  weight: "850",
  color: "white",
};

console.log(car["color"]);
console.log(car.weight);

// ciclo while
let numberWhile = 0;
while (numberWhile < 10) {
  console.log(`el numero es: ${numberWhile}`);
  numberWhile++;
}

console.log("fin-del-conteo");
