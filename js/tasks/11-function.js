// ==========================================
// 1. Функція додавання двох чисел
// ==========================================
function sum(a, b) {
  return a + b;
}

console.log("--- 1. Додавання двох чисел ---");
console.log(sum(2, 3)); // 5
console.log(sum(33, 5)); // 38

// ==========================================
// 2. Функція перевірки парності
// ==========================================
function checkEvenOdd(num) {
  return num % 2 === 0 ? "парне" : "непарне";
}

console.log("\n--- 2. Перевірка парності ---");
console.log(checkEvenOdd(7)); // "непарне"
console.log(checkEvenOdd(24)); // "парне"

// ==========================================
// 3. Функція для виведення чисел від 1 до N
// ==========================================
function printNumbers(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  console.log(result.join(", "));
}

console.log("\n--- 3. Виведення чисел від 1 до N ---");
printNumbers(5); // 1, 2, 3, 4, 5
printNumbers(8); // 1, 2, 3, 4, 5, 6, 7, 8

// ==========================================
// 4. Функція знаходження найбільшого з трьох чисел
// ==========================================
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log("\n--- 4. Найбільше з трьох чисел ---");
console.log(findMax(4, 7, 2)); // 7
console.log(findMax(14, 3, 8)); // 14

// ==========================================
// 5. Функція обчислення факторіала
// ==========================================
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("\n--- 5. Обчислення факторіала ---");
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// ==========================================
// 6. Функція перевірки наявності елемента в масиві
// ==========================================
function includesElement(arr, element) {
  return arr.includes(element);
}

console.log("\n--- 6. Наявність елемента в масиві ---");
console.log(includesElement([1, 2, 3, 4], 3)); // true
console.log(includesElement(["a", 2, "m", -56], 45)); // false

// ==========================================
// 7. Функція обчислення суми елементів масиву
// ==========================================
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log("\n--- 7. Сума елементів масиву ---");
console.log(sumArray([5, 10, 15])); // 30
console.log(sumArray([-35, -100, -5])); // -140

// ==========================================
// 8. Функція для виведення лише парних чисел масиву
// ==========================================
function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log("\n--- 8. Лише парні числа масиву ---");
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]
console.log(filterEven([11, 21, 37, 43, 55])); // []

// ==========================================
// 9. Функція перевірки паліндрома
// ==========================================
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log("\n--- 9. Перевірка паліндрома ---");
console.log(isPalindrome("level")); // true
console.log(isPalindrome("study")); // false

// ==========================================
// 10. Функція обчислення кількості голосних у рядку
// ==========================================
function countVowels(str) {
  const vowels = "aeioyuAEIOYU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("\n--- 10. Кількість голосних у рядку ---");
console.log(countVowels("javascript")); // 3
console.log(countVowels("return")); // 2

// ==========================================
// 11. Функція переведення числа в масив цифр
// ==========================================
function numberToArray(num) {
  return String(num).split("").map(Number);
}

console.log("\n--- 11. Переведення числа в масив цифр ---");
console.log(numberToArray(1234)); // [1, 2, 3, 4]
console.log(numberToArray(98765)); // [9, 8, 7, 6, 5]

// ==========================================
// 12. Функція перевірки мінімального елемента масиву
// ==========================================
function findMin(arr) {
  return Math.min(...arr);
}

console.log("\n--- 12. Мінімальний елемент масиву ---");
console.log(findMin([8, 3, 10, 1])); // 1
console.log(findMin([-18, -23, -34, -2])); // -34

// ==========================================
// 13. Функція для пошуку індекса елемента
// ==========================================
function findIndex(arr, element) {
  return arr.indexOf(element);
}

console.log("\n--- 13. Пошук індекса елемента ---");
console.log(findIndex([1, 2, 3, 4], 3)); // 2
console.log(findIndex(["q", "w", "a", "s", "d"], 6)); // -1

// ==========================================
// 14. Функція обчислення середнього арифметичного
// ==========================================
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

console.log("\n--- 14. Середнє арифметичне ---");
console.log(calculateAverage([10, 20, 30, 40])); // 25
console.log(calculateAverage([-4, -16, -12, -8])); // -10

// ==========================================
// 15. Функція для визначення простого числа
// ==========================================
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("\n--- 15. Визначення простого числа ---");
console.log(isPrime(11)); // true
console.log(isPrime(24)); // false
