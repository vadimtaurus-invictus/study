// ===========1=========
const name = "Vadym";
const age = 38;
console.log(name);
console.log(age);

// ===========2=========

const a = 10;
const b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335

// ===========3=========
const num = 17;
console.log(num % 5); // 2
// ===========4=========
let x = 10;
x += 5;
x++;
console.log(x); // 16

// ===========5=========

let PI = 3.14;
PI = 3.14159;
console.log(PI);
// ===========6=========
const length = 8;
const width = 5;
const square = length * width;
console.log(square);

console.log(
  `Площа прямокутника зі сторонами ${length} і ${width} дорівнює ${square}`,
);

// ===========7=========

console.log(10 + 5 * 2); // 20
console.log((10 + 5) * 2); // 30

// ===========8=========

const tempC = 20;
const F = tempC * 1.8 + 32;
console.log(F); // 68

// ===========9=========

const nAme = "Олег";
const city = "Львів";
console.log(`${nAme} переїхав у ${city}`);

// ===========10=========

const salaryPerHour = 150;
const hoursPerDay = 8;
const days = 20;
const total = days * hoursPerDay * salaryPerHour;
console.log(`Заробіток за ${days} днів по ${hoursPerDay} годин: ${total} грн`);
