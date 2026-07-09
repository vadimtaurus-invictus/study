// типи даних у js

// Числа(Number)
const age = 38; // ціле число
const smallPrice = 0.17; // число з плаваючою комою
const count = 0;
const milion = 1_000_000; // аналог 1000000, "_" - для зручності

// Рядки(String)

const name = "Vadym";
// 'Vadym' - Prettier замінює одинарні лапки на подвійні
const lastName = "Kotovych";
const middleName = `Viktorovych`;

const letter = "q"; // один символ
const sign = "-"; // один символ
const emptyString = ""; // порожній рядок
const orgName1 = 'ТОВ "Анастасія"'; // можна вкладати одні лапки в інші
const orgName2 = `ТОВ "Анастасія"`;

const cafeName1 = "Морквяна Мар'яна";
const cafeName2 = `Морквяна Мар'яна`;

// Шаблонний літерал(шаблонний рядок)
// Синтаксис
// `${назва_змінної_або_вираз}`

// Вітаємо,Vadym з успішною реєстрацією
console.log(`Вітаємо,${name} з успішною реєстрацією`);
// `Вітаємо,${name} з успішною реєстрацією`
// приклад
// відбувається підстановка значегння змінної name  замість ${name}
// Важливо щоб між $ і { не було пробілів

let amount = 2;
const price = 47;

// 2 кг яблук по ціні 47 грн коштує 94 ₴ (в консолі)
console.log(
  `${amount} кг яблук по ціні ${price} грн коштує ${amount * price} ₴`,
);

amount = 5;

console.log(
  `${amount} кг яблук по ціні ${price} грн коштує ${amount * price} ₴`,
);
// 5 кг яблук по ціні 47 грн коштує 235 ₴


// ====================================

// =========Логічний(булевий тип\ Boolean)

const isCorrect = true;   // істина, правда, так
const hasChild = false;      // хиба, не правда, ні

// нічого(Null)

const border = null;    // аналог в css  - border = none

// Не задано, не визначено(undefined)

let catsCount;   // undefined
let dogsCount = undefined;
// попередні два рядки задають однакове значення для змінних
// Не задаго це Не нічого, це різні значення


// =============Перевірка типу(typeof)
//------- Синтаксис
// typeof <змінна>
// typeof <значення>
// Результат
// undefined | number | string | boolean | object
let t;
console.log("t=", t, "і це тип:", typeof t);

t=23;
console.log("t=", t, "і це тип:", typeof t);

t="Text";
console.log("t=", t, "і це тип:", typeof t);

t = false;
console.log("t=", t, "і це тип:", typeof t);

t = null;
console.log("t=", t, "і це тип:", typeof t);