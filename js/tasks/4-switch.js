// 1============== Калькулятор з умовними операторами (без перевірок)

function calculator(num1, num2, operator) {
  let result;

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
      // Перевірка на ділення на нуль
      if (num2 === 0) {
        return "Помилка: ділення на нуль неможливе!";
      }
      result = num1 / num2;
      break;
    default:
      return "Помилка: невідомий оператор!";
  }

  return `Результат: ${num1} ${operator} ${num2} = ${result}`;
}

// --- Приклади використання ---

console.log("========приклади використання======");

console.log(calculator(5, 5, "+")); // Результат: 5 + 5 = 10
console.log(calculator(10, 5, "-")); // Результат: 10 - 5 = 5
console.log(calculator(5, 5, "*")); // Результат: 5 * 5 = 25
console.log(calculator(10, 2, "/")); // Результат: 10 / 2 = 5
console.log(calculator(10, 0, "/")); // Помилка: ділення на нуль неможливе!
console.log(calculator(10, 5, "%")); // Помилка: невідомий оператор!

// ====================2  Визначення дня тижня

// Запитуємо у користувача число та перетворюємо його на ціле число (Integer)
// роз'яснення для parseInt----------------
//  parseInt() у JavaScript — це вбудована функція,
// яка аналізує (парсить) рядковий аргумент і повертає ціле число.
// Вона читає рядок зліва направо і витягує з нього числові символи,
// поки не зустріне перший нечисловий символ або кінець рядка
const dayNumber = parseInt(prompt("Введіть число від 1 до 7:"));

let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Понеділок";
    break;
  case 2:
    dayName = "Вівторок";
    break;
  case 3:
    dayName = "Середа";
    break;
  case 4:
    dayName = "Четвер";
    break;
  case 5:
    dayName = "П’ятниця";
    break;
  case 6:
    dayName = "Субота";
    break;
  case 7:
    dayName = "Неділя";
    break;
  default:
    // Цей блок спрацює, якщо введене число не входить в діапазон 1-7 або це взагалі не число
    dayName =
      "Помилка: введено некоректне число. Будь ласка, введіть число від 1 до 7.";
}

// Вивід результату
alert(dayName);

// ====================3  Визначення пори року

// Запитуємо у користувача номер місяця та перетворюємо його на число
const monthNumber = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));

let season;

switch (monthNumber) {
  // Зима: грудень (12), січень (1), лютий (2)
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;

  // Весна: березень (3), квітень (4), травень (5)
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;

  // Літо: червень (6), липень (7), серпень (8)
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;

  // Осінь: вересень (9), жовтень (10), листопад (11)
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;

  // Якщо введено число поза межами 1-12 або взагалі не число
  default:
    season =
      "Помилка: введено некоректний номер місяця. Будь ласка, введіть число від 1 до 12.";
}

// Виводимо результат
alert(season);

// ====================4   Калькулятор знижки

// 1. Запитуємо у користувача суму покупки та код знижки + перетворення на номер(Number)
const totalAmount = Number(prompt("Введіть суму покупки (грн):"));
const discountCode = Number(prompt("Введіть код знижки (1-5):"));

// Змінна для зберігання відсотка знижки
let discountPercent = 0; // Відсоток знижки за замовчуванням
let isValidCode = true; // Прапорець для перевірки правильності коду

// 2. Визначаємо відсоток знижки залежно від коду
switch (discountCode) {
  case 1:
    discountPercent = 10;
    break;
  case 2:
    discountPercent = 15;
    break;
  case 3:
    discountPercent = 20;
    break;
  case 4:
    discountPercent = 25;
    break;
  case 5:
    discountPercent = 30;
    break;
  default:
    isValidCode = false;
    alert("Невірний код знижки! Будь ласка, введіть число від 1 до 5.");
}

// 3. Якщо код правильний і сума є числом, рахуємо фінальну вартість
if (isValidCode && !isNaN(totalAmount) && totalAmount > 0) {
  // Розрахунок суми знижки та кінцевої суми до сплати
  const discountAmount = (totalAmount * discountPercent) / 100;
  const finalAmount = totalAmount - discountAmount;

  // 4. Виводимо результат користувачеві  з округленням до 2 знаків після коми (toFixed)
  alert(
    `Початкова сума: ${totalAmount.toFixed(2)} грн\n` +
      `Ваша знижка (${discountPercent}%): ${discountAmount.toFixed(2)} грн\n` +
      `Сума до сплати: ${finalAmount.toFixed(2)} грн`,
  );
} else if (isNaN(totalAmount) || totalAmount <= 0) {
  // ! попередженя якщо сума не вказана, від'ємна, або 0
  alert("Будь ласка, введіть коректну суму покупки.");
}
