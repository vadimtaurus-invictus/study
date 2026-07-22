console.log("Знайти суму елементів масиву======№1");
// --------------------------
const numbers = [1, 2, 3, 4, 5];
let sum = 0; // Створюємо змінну для збереження результату

// Перебираємо кожен елемент масиву
for (const num of numbers) {
  sum += num; // Додаємо поточне число до загальної суми
}

console.log(`сума елементів: ${sum}`); // 15

console.log("========кожен елемент окремо=========№2");

const fruits = ["яблуко", "банан", "груша"];

for (const fruit of fruits) {
  console.log(fruit);
}

console.log("===========найбільше число=============№3");

const numberS = [3, 5, 1, 8, 2];

// 1. Припускаємо, що перший елемент масиву є найбільшим
let maX = numberS[0];

// 2. Проходимо циклом по всіх елементах масиву
for (let i = 1; i < numberS.length; i++) {
  // 3. Якщо поточний елемент більший за наш максимум...
  if (numbers[i] > maX) {
    // ...оновлюємо значення максимуму
    maX = numberS[i];
  }
}

console.log("Найбільше число в масиві:", maX); //  8

console.log("======= парні числа=======№4");

// масив чисел
const numbeRs = [1, 3, 4, 7, 10, 12, 15, 18];

// Цикл перебору кожного елемента масиву
for (let i = 0; i < numbeRs.length; i++) {
  // Умовний оператор для перевірки на парність
  if (numbeRs[i] % 2 === 0) {
    console.log(numbeRs[i]); // 4,1,12,18
  }
}

console.log("========кількість додатніх чисел ========№5");

// 1. Початковий масив чисел
const numbErs = [5, -3, 10, -7, 8, -2, 1];

// 2. Змінна-лічильник, де ми зберігатимемо кількість додатних чисел
let positiveCount = 0;

// 3. Цикл для обходу кожного елемента масиву
for (let i = 0; i < numbErs.length; i++) {
  // 4. Умовний оператор: перевіряємо, чи число більше за 0
  if (numbErs[i] > 0) {
    positiveCount++; // Збільшуємо лічильник на 1
  }
}

// 5. Виведення результату в консоль
console.log("Кількість додатних чисел:", positiveCount); // 4

console.log("======== фільтр чисел ==========№6");
// 1. Запитуємо у користувача число (поріг)
// Використовуємо parseFloat або Number, щоб перетворити введений текст на число
const to = Number(prompt("Введіть число (поріг):"));

// 2. Створюємо масив чисел
const numBers = [2, 5, 8, 12, 15, 20];

console.log(`Числа, які більші за ${to}:`);

// 3. Перебираємо масив за допомогою циклу та перевіряємо умову
for (const number of numBers) {
  if (number > to) {
    console.log(number);
  }
}

console.log("===сума(+)парних/добуток(*)непарних====№7");

const nuMbers = [1, 4, 6, 8, 3];

let evenSum = 0; // Для суми парних чисел
let oddEl = 1; // Для добутку непарних чисел

for (const num of nuMbers) {
  if (num % 2 === 0) {
    // Якщо число ділиться на 2 без остачі, воно парне
    evenSum += num;
  } else {
    // В іншому випадку число непарне
    oddEl *= num;
  }
}

console.log(`Сума парних чисел: ${evenSum}`); // 4 + 6 + 8 = 18
console.log(`Добуток непарних чисел: ${oddEl}`); // 1 * 3 = 3

console.log("Вивести всіх крім 4 =========№8");

const nUmbers = [1, 2, 3, 4, 5, 6];

for (const num of nUmbers) {
  if (num === 4) {
    continue; // Пропускаємо число 4
  }
  console.log(num);
}

console.log("Вивести всіх крім вказаного =========№9");

// 1. Створюємо заданий масив
const numbers1 = [1, 2, 3, 4, 5, 6];

// 2. Запитуємо число у користувача та перетворюємо його на тип Number
const excludedNumber = Number(prompt("Введіть число, яке потрібно виключити:"));

// 3. Проходимо циклом по масиву
for (let i = 0; i < numbers1.length; i++) {
  // Якщо поточний елемент НЕ дорівнює введеному числу — виводимо його
  if (numbers1[i] !== excludedNumber) {
    console.log(numbers1[i]);
  }
}

console.log("Вивести середнє значення===================№10");

const numbeRS = [10, 20, 30, 40, 50];
let suM = 0;

// Підрахунок загальної суми елементів
for (let i = 0; i < numbeRS.length; i++) {
  suM += numbeRS[i];
}

// Ділимо суму на кількість елементів
const average = suM / numbeRS.length;

console.log("Середнє значення:", average); //  30

console.log("=========Пошук екстремумів===================№11");

// 1. Створюємо масив чисел
const nuMBers = [24, 7, 89, 2, 45, 99, 12];

// 2. Беремо перший елемент за початковий орієнтир
let min = nuMBers[0];
let max = nuMBers[0];
let minIndex = 0;
let maxIndex = 0;

// 3. Проходимо по масиву, починаючи з другого елемента (індекс 1)
for (let i = 1; i < nuMBers.length; i++) {
  if (nuMBers[i] < min) {
    min = nuMBers[i];
    minIndex = i;
  }

  if (nuMBers[i] > max) {
    max = nuMBers[i];
    maxIndex = i;
  }
}

// 4. Виводимо результати
console.log(`Масив: [${nuMBers.join(", ")}]`);
console.log(`Найменший елемент: ${min}, позиція (індекс): ${minIndex}`);
console.log(`Найбільший елемент: ${max}, позиція (індекс): ${maxIndex}`);

console.log("=========Підрахунок парних/непарних===================№12");

// 1. Створюємо масив чисел
const nUMbers = [12, 5, 8, 19, 24, 3, 7, 10, 15, 22];

// Створюємо лічильники
let evenCount = 0; // для парних
let oddCount = 0; // для непарних

// 2. Перебираємо елементи та перевіряємо залишок від ділення на 2
for (const num of nUMbers) {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

// 3. Виводимо результати
console.log("Масив:", nUMbers);

console.log(`Кількість парних чисел: ${evenCount}`);
console.log(`Кількість непарних чисел: ${oddCount}`);

console.log("=========Другий максимум===================№13");

// 1. Створюємо масив чисел
const numBERs = [12, 45, 7, 89, 23, 89, 54, 10];

// 2. Знаходимо найбільший елемент (перший максимум)
const max1 = Math.max(...numBERs);

// 3. Знаходимо найбільший елемент серед тих, що залишились
// (фільтруємо масив, прибираючи всі значення, що дорівнюють max1)
const remainingNumBERs = numBERs.filter((num) => num !== max1);
const max2 = Math.max(...remainingNumBERs);

// 4. Виводимо обидва значення
console.log("Масив:", numBERs);

console.log(`Перший максимум: ${max1}`);
console.log(`Другий максимум: ${max2}`);

console.log("=========Об'єднання елементів масиву в рядок==========№14");

const fruitS = ["Яблуко", "Банан", "Груша"];
let result = "";

for (const fruit of fruitS) {
  if (result !== "") {
    result += ", "; // Додаємо роздільник перед наступним елементом
  }
  result += fruit;
}

console.log("Масив до об'єднання:", fruitS);
console.log("Після:", result); // "Яблуко, Банан, Груша"

console.log("=========Сортування бульбашкою================№15");

function bubbleSort(arr) {
  // Створюємо копію, щоб не змінювати оригінальний масив
  const result = [...arr];
  const n = result.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Внутрішній цикл порівнює сусідні елементи
    for (let j = 0; j < n - 1 - i; j++) {
      // Якщо лівий елемент більший за правий — міняємо їх місцями
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true; // Фіксуємо, що відбувся обмін
      }
    }

    // Якщо за весь прохід не було жодної перестановки — масив відсортовано
    if (!swapped) break;
  }

  return result;
}

// Приклад використання:
const nuMBERs = [64, 34, 25, 12, 22, 11, 90];
console.log("Масив до сортування:", nuMBERs);

console.log("Після:", bubbleSort(nuMBERs));
// Результат: [11, 12, 22, 25, 34, 64, 90]
