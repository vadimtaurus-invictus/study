console.log("=========Конкатенація рядків================№1");

// 1. змінні
const firstName = "Vadym";
const lastName = "Kotovych";

// 2. Об'єднуємо через шаблонні рядки
const fullName = `${firstName} ${lastName}`;

// 3. Виводимо результат
console.log(fullName); //  "Vadym Kotovych"

console.log("=========Перевірка довжини рядка================№2");

function checkLength(str) {
  return str.length > 10 ? "Довгий рядок" : "Короткий рядок";
}

// Отримуємо рядок від користувача
const userInput = prompt("Введіть рядок:");

if (userInput !== null) {
  const result = checkLength(userInput);
  alert(result);
}

console.log("=========Пошук символа ========================№3");

// 1. Задаємо рядок
const text = "Сьогодні чудовий день";

// 2. Вказуємо символ, який шукаємо
const target = "д";

// 3. Знаходимо індекс першого входження
const index = text.indexOf(target);

// 4. результат
console.log(`Перша літера "${target}" знаходиться за індексом: ${index}`);

console.log("========= Заміна слів у рядку ========================№4");

const frase = "Сьогодні чудовий день";

// Заміна "чудовий" на "гарний"
let newFrase = frase.replace("чудовий", "гарний");

console.log(newFrase); // "Сьогодні гарний день"

console.log("========= Зворотній порядок рядка ========================№5");

function reverseString(str) {
  return str.split("").reverse().join("");
}

const inputStr = "я несу гусеня";
const result = reverseString(inputStr);

console.log(result); // "янесуг усен я" ))

console.log("========= Перетворення регістра ========================№6");

// 1. Рядок
const originalString = "fortes fortuna adiuvat!";

// 2. Ростемо
const upperCaseString = originalString.toUpperCase();

// Результат в консоль
console.log(upperCaseString);

console.log("========= Перевірка наявності підрядка ======================№7");

// 1.
const str = "JavaScript";
const substring = "Script";
//2.
const reSult = str.includes(substring);
// 3.
console.log(reSult); // true

console.log("========= Видалення пробілів ======================№8");

// 1. Оголошуємо початковий рядок
const string = "    Четвер – 4 день тижня		";

// 2. Видаляємо пробіли з початку та кінця
const newString = string.trim();

// 3. Виводимо результат
console.log(newString); //"Четвер – 4 день тижня"

console.log("========= Скорочення речення ======================№9");

let sentence =
  "Це речення має більше ніж сімдесят два символи, тому його потрібно буде скоротити і додати три крапки в кінці.";
const maxLength = 72;

if (sentence.length > maxLength) {
  // Обрізаємо до 72 символів та додаємо "..."
  sentence = sentence.slice(0, maxLength) + "...";
}

console.log(sentence);

console.log("========= Просунутий калькулятор ======================№10");
console.log("========= Результат через alert");

// 1. Отримуємо вираз від користувача
const input = prompt("Введіть математичний вираз (наприклад, 2+2 або 5*5):");

if (input) {
  // Видаляємо зайві пробіли з початку і кінця рядка
  const cleanedInput = input.trim();

  let operator = null;

  // 2. Шукаємо, який саме оператор міститься в рядку за допомогою .includes()
  if (cleanedInput.includes("+")) operator = "+";
  else if (cleanedInput.includes("-")) operator = "-";
  else if (cleanedInput.includes("*")) operator = "*";
  else if (cleanedInput.includes("/")) operator = "/";

  if (operator) {
    // 3. Розділяємо рядок на два числа за допомогою .split()
    const parts = cleanedInput.split(operator);

    // Перетворюємо отримані підрядки в числа (і прибираємо можливі пробіли навколо них)
    const num1 = Number(parts[0].trim());
    const num2 = Number(parts[1].trim());

    let result;

    // 4. Виконуємо відповідну операцію
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Помилка: ділення на нуль!";
        break;
    }

    alert(`Результат: ${result}`);
  } else {
    alert("Помилка: не знайдено підтримуваного оператора (+, -, *, /)");
  }
}

console.log("========= Підрахунок символів ======================№11");

const teXt = "Я впевнена(-ий), що у мене вийде вивчити ДжаваСкрипт у 2026 році";

const vowels = ["а", "е", "и", "і", "о", "у", "А", "Е", "И", "І", "О", "У"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const punctuation = [",", ".", "-", ":", " "];

// Лічильники
let vowelsCount = 0;
let digitsCount = 0;
let punctuationCount = 0;
let othersCount = 0;

// Проходимо по кожному символу рядка
for (const char of teXt) {
  if (vowels.includes(char)) {
    vowelsCount++;
  } else if (digits.includes(Number(char)) && char !== " ") {
    digitsCount++;
  } else if (punctuation.includes(char)) {
    punctuationCount++;
  } else {
    othersCount++;
  }
}

console.log(`Голосні: ${vowelsCount}`);
console.log(`Цифри: ${digitsCount}`);
console.log(`Розділові знаки та пробіли: ${punctuationCount}`);
console.log(`Інші символи (приголосні, дужки тощо): ${othersCount}`);
