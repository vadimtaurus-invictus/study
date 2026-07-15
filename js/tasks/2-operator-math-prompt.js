// =============================1. Обчислення периметру прямокутника
const leNgth = 15;
const wiDth = 8;
console.log(`периметр прямокутника: ${2 * (leNgth + wiDth)}`);

console.log("-----------------------------");

// ========================2. Розрахунок вартості товару зі знижкою

// 1. Задаємо початкову ціну товару та відсоток знижки
const price = 1000;
const discount = 15;

// 2. сума знижки
const discountAmount = (price * discount) / 100;

// 3. Обчислюємо фінальну ціну
const finalPrice = price - discountAmount;

// 4. Виводимо результати в консоль
console.log(`Початкова ціна: ${price} грн`);
console.log(`Сума знижки (${discount}%): ${discountAmount} грн`);
console.log(`Кінцева ціна: ${finalPrice} грн`);

console.log("-----------------------------");

// -----------------------3. Калькулятор витрат палива

const consumption = 8.5; // витрати палива на 100 км
const dIstance = 120; // відстань поїздки в км
const prIce = 52.5; // вартість палива за літр

// 2. Обчислюємо необхідну кількість палива
// Формула: (відстань / 100) * витрата на 100 км
const fuelNeeded = (dIstance / 100) * consumption;

// 3. Обчислюємо вартість всієї поїздки
const tripCost = fuelNeeded * prIce;

// 4. Виводимо результати з округленням до двох знаків після коми
console.log(`Необхідно палива: ${fuelNeeded.toFixed(2)} л`);
console.log(`Вартість поїздки: ${tripCost.toFixed(2)} грн`);

console.log("-----------------------------");

// 4.================== 4. Персоналізоване привітання з днем народження

// 1. Запитуємо ім'я користувача
const userName = prompt("Будь ласка, введіть ваше ім'я:", "Vadym");

// 2. Запитуємо вік користувача
const userAge = prompt("Скільки вам років?", "38");

// 3. Виводимо повідомлення
alert(`Вітаємо, ${userName}! З ${userAge}-річчям!`);

// ================================= 5. Конвертер температури

// 1. Запитуємо температуру в користувача
const celsiusInput = prompt("Введіть температуру в градусах Цельсія (°C):");

// Перетворюємо введене значення у число
const celsius = parseFloat(celsiusInput);

// Перевіряємо, чи користувач ввів коректне число
if (isNaN(celsius)) {
  alert("Будь ласка, введіть коректне число!");
} else {
  // 2. Конвертуємо за формулою
  const fahrenheit = (celsius * 9) / 5 + 32;

  // 3. Округляємо до цілого числа
  const roundedFahrenheit = Math.round(fahrenheit);

  // Виводимо результат
  alert(`${celsius}°C — це приблизно ${roundedFahrenheit}°F`);
}
// ===============================6 розрахунок часу подорожі

// 1. Запитуємо відстань та середню швидкість
const distanceInput = prompt("Введіть відстань в кілометрах (км):");
const speedInput = prompt("Введіть середню швидкість в км/год:");

// Перетворюємо введені рядки у числа
const distance = parseFloat(distanceInput);
const speed = parseFloat(speedInput);

// Перевіряємо, чи ввів користувач коректні числа і чи швидкість більша за нуль
if (isNaN(distance) || isNaN(speed) || speed <= 0 || distance < 0) {
  alert(
    "Будь ласка, введіть коректні числові значення (швидкість має бути більшою за 0).",
  );
} else {
  // 2. Обчислюємо загальний час у годинах (як десятковий дріб)
  const totalHours = distance / speed;

  // 3. Виділяємо цілу кількість годин та хвилини
  const hours = Math.floor(totalHours);
  // Округлюємо хвилини до найближчого цілого
  const minutes = Math.round((totalHours - hours) * 60);

  // 4. Виводимо результат у потрібному форматі
  alert(`Час в дорозі: ${hours} год ${minutes} хв`);
}

// ================================ 7. Калькулятор площі та об'єму циліндра:

// 1. Запитуємо радіус основи циліндра
const radiusInput = prompt("Введіть радіус основи циліндра:", "12");
const r = parseFloat(radiusInput);

// 2. Запитуємо висоту циліндра
const heightInput = prompt("Введіть висоту циліндра:", "12");
const h = parseFloat(heightInput);

// Перевірка, чи ввів користувач коректні числа
if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
  alert("Будь ласка, введіть коректні числові значення більше нуля!");
} else {
  // 3. Обчислюємо площу основи (S = π * r²)
  const baseArea = Math.PI * Math.pow(r, 2);

  // 4. Обчислюємо об'єм циліндра (V = S * h)
  const volume = baseArea * h;

  // 5. Виводимо результати з трьома знаками після коми
  alert(
    `Результати обчислень:\n` +
      `---------------------------\n` +
      `Площа основи: ${baseArea.toFixed(3)}\n` +
      `Об'єм циліндра: ${volume.toFixed(3)}`,
  );
}

// =========================== 8. Розрахунок гіпотенузи:

// 1. Запитуємо довжину першого катета
const inputA = prompt("Введіть довжину першого катета (a):", "12");
const a = parseFloat(inputA);

// 2. Запитуємо довжину другого катета
const inputB = prompt("Введіть довжину другого катета (b):", "12");
const b = parseFloat(inputB);

// Перевіряємо, чи ввів користувач коректні числа
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  alert("Будь ласка, введіть коректні додатні числа!");
} else {
  // 3. Обчислюємо довжину гіпотенузи за теоремою Піфагора
  // c = √(a² + b²)
  const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  // 4. Виводимо результат, округлений до сотих
  alert(`Довжина гіпотенузи (c): ${c.toFixed(2)}`);
}

// =============================== 9. Калькулятор депозиту:

// 1. Запитуємо суму вкладу
const depositInput = prompt("Введіть суму вкладу:", "2000");
const deposit = parseFloat(depositInput);

// 2. Запитуємо річну процентну ставку
const rateInput = prompt("Введіть річну процентну ставку (%):", "12");
const annualRate = parseFloat(rateInput);

// 3. Запитуємо термін вкладу в місяцях
const monthsInput = prompt("Введіть термін вкладу (в місяцях):", "12");
const months = parseInt(monthsInput, 10);

// Перевіряємо правильність введення даних
if (
  isNaN(deposit) ||
  isNaN(annualRate) ||
  isNaN(months) ||
  deposit <= 0 ||
  annualRate <= 0 ||
  months <= 0
) {
  alert("Будь ласка, введіть коректні додатні числа!");
} else {
  // 4. Обчислюємо суму відсотків
  const interestEarned = (deposit * annualRate * months) / (12 * 100);

  // Обчислюємо загальну суму (початкова сума + відсотки)
  const totalAmount = deposit + interestEarned;

  // 5. Виводимо початкову суму та суму з відсотками
  alert(
    `Деталі вашого вкладу:\n` +
      `---------------------------\n` +
      `Початкова сума: ${deposit.toFixed(2)}\n` +
      `Нараховані відсотки: ${interestEarned.toFixed(2)}\n` +
      `Загальна сума з відсотками: ${totalAmount.toFixed(2)}`,
  );
}

// ===================================10. Розрахунок щомісячного платежу за кредитом:

// 1. Запитуємо вхідні дані у користувача
const loanAmount = parseFloat(prompt("Введіть суму кредиту (грн):", "12000"));
const annualInterestRate = parseFloat(
  prompt("Введіть річну відсоткову ставку (%):", "12"),
);
const loanTermYears = parseFloat(
  prompt("Введіть термін кредиту (в роках):", "3"),
);

// Перевірка на коректність введених даних
if (
  isNaN(loanAmount) ||
  isNaN(annualInterestRate) ||
  isNaN(loanTermYears) ||
  loanAmount <= 0 ||
  annualInterestRate <= 0 ||
  loanTermYears <= 0
) {
  alert("Будь ласка, введіть коректні числові значення більше нуля.");
} else {
  // 2. Конвертуємо річну ставку в місячну (у десятковому форматі)
  const monthlyRate = annualInterestRate / 100 / 12;

  // 3. Розраховуємо загальну кількість місяців (платежів)
  const totalPayments = loanTermYears * 12;

  // 4. Обчислюємо щомісячний платіж за ануїтетною формулою
  let monthlyPayment;

  if (monthlyRate === 0) {
    // Якщо відсоткова ставка раптом 0%
    monthlyPayment = loanAmount / totalPayments;
  } else {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }

  // 5. Обчислюємо загальну суму виплат
  const totalRepayment = monthlyPayment * totalPayments;

  // 6. Виводимо результати (округлюємо до 2 знаків після коми)
  alert(
    `Результати розрахунку:\n` +
      `-----------------------------------\n` +
      `Щомісячний платіж: ${monthlyPayment.toFixed(2)} грн\n` +
      `Загальна сума виплат: ${totalRepayment.toFixed(2)} грн\n` +
      `Переплата за кредитом: ${(totalRepayment - loanAmount).toFixed(2)} грн`,
  );
}

// ================================11. Конвертер хвилин

// 1. Запитуємо у користувача кількість хвилин
const input = prompt("Введіть кількість хвилин:", "2000");

// Перетворюємо введені дані на ціле число
const totalMinutes = parseInt(input, 10);

// Перевіряємо, чи користувач ввів коректне число
if (isNaN(totalMinutes) || totalMinutes < 0) {
  alert("Будь ласка, введіть коректне число хвилин!");
} else {
  // 2. Переводимо у години та хвилини
  const hours = Math.floor(totalMinutes / 60); // Знаходимо цілу кількість годин (X)
  const minutes = totalMinutes % 60; // Знаходимо залишок хвилин (Y)

  // 3. Виводимо результат у потрібному форматі
  const result = `${hours} год ${minutes} хв`;

  alert(result); // результат ("33 год 20 хв")
}

// =================================== 12. Розрахунок віку в днях

// 1. Запитуємо дані у користувача
const birthYear = parseInt(prompt("Введіть ваш рік народження:"), 10);
const birthMonth = parseInt(
  prompt("Введіть ваш місяць народження (1-12):"),
  10,
);
const birthDay = parseInt(prompt("Введіть ваш день народження (1-31):"), 10);

// Отримуємо поточну дату
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // getMonth() повертає місяці від 0 до 11
const currentDay = today.getDate();

// Перевірка на коректність введення базових чисел
if (
  isNaN(birthYear) ||
  isNaN(birthMonth) ||
  isNaN(birthDay) ||
  birthMonth < 1 ||
  birthMonth > 12
) {
  alert("Будь ласка, введіть коректні числа!");
} else {
  // 2. Рахуємо загальну кількість днів від початку нашої ери (умовний нульовий рік)
  // за спрощеною формулою: 1 рік = 365 днів, 1 місяць = 30 днів

  // Кількість днів для поточної дати
  const totalDaysToday = currentYear * 365 + currentMonth * 30 + currentDay;

  // Кількість днів для дати народження
  const totalDaysBirth = birthYear * 365 + birthMonth * 30 + birthDay;

  // 3. Обчислюємо різницю
  const daysPassed = totalDaysToday - totalDaysBirth;

  // Виводимо результат
  if (daysPassed < 0) {
    alert("Ого, схоже, ви ввели дату з майбутнього!");
  } else {
    const result = `З дня вашого народження приблизно минуло: ${daysPassed} днів.`;
    alert(result);
  }
}

// ========================= 13. Калькулятор витрат на ремонт

// 1. Запитуємо вихідні дані у користувача
const length = parseFloat(prompt("Введіть довжину кімнати (в метрах):", "4"));
const width = parseFloat(prompt("Введіть ширину кімнати (в метрах):", "3"));
const height = parseFloat(prompt("Введіть висоту кімнати (в метрах):", "2.3"));

const wallpaperPricePerM2 = parseFloat(
  prompt("Введіть вартість шпалер за м² (в грн):", "300"),
);
const ceilingPaintPricePerM2 = parseFloat(
  prompt("Введіть вартість фарби для стелі за м² (в грн):", "70"),
);

// Перевірка на коректність введених чисел
if (
  isNaN(length) ||
  length <= 0 ||
  isNaN(width) ||
  width <= 0 ||
  isNaN(height) ||
  height <= 0 ||
  isNaN(wallpaperPricePerM2) ||
  wallpaperPricePerM2 < 0 ||
  isNaN(ceilingPaintPricePerM2) ||
  ceilingPaintPricePerM2 < 0
) {
  alert("Будь ласка, введіть коректні числові значення більше нуля!");
} else {
  // 2. Обчислюємо площу стін та стелі
  const wallArea = 2 * (length + width) * height; // Площа 4-х стін
  const ceilingArea = length * width; // Площа стелі

  // 3. Розраховуємо вартість матеріалів
  const wallpaperCost = wallArea * wallpaperPricePerM2;
  const paintCost = ceilingArea * ceilingPaintPricePerM2;
  const totalCost = wallpaperCost + paintCost;

  // 4. Формуємо детальний звіт
  const report = `--- ДЕТАЛЬНИЙ РОЗРАХУНОК ---
Розміри кімнати: ${length}м x ${width}м x ${height}м

1. Стіни (Шпалери):
   - Площа стін: ${wallArea.toFixed(2)} м²
   - Ціна шпалер: ${wallpaperPricePerM2.toFixed(2)} грн/м²
   - Вартість: ${wallpaperCost.toFixed(2)} грн

2. Стеля (Фарба):
   - Площа стелі: ${ceilingArea.toFixed(2)} м²
   - Ціна фарби: ${ceilingPaintPricePerM2.toFixed(2)} грн/м²
   - Вартість: ${paintCost.toFixed(2)} грн

---------------------------
ЗАГАЛЬНА ВАРТІСТЬ: ${totalCost.toFixed(2)} грн`;

  // Виводимо результат

  alert(report);
}

// ============================= 14. Калькулятор доставки

// 1. Запитуємо дані у користувача за допомогою prompt()
// prompt повертає рядок, тому використовуємо Number() або parseFloat() для перетворення у числа.
const weight = parseFloat(prompt("Введіть вагу посилки (кг):"));
const distAnce = parseFloat(prompt("Введіть відстань доставки (км):"));

// Перевіряємо, чи користувач ввів коректні числові значення
if (isNaN(weight) || isNaN(distance) || weight <= 0 || distAnce <= 0) {
  alert("Будь ласка, введіть коректні додатні числа для ваги та відстані.");
} else {
  // 2. Визначаємо тарифи та базову ставку
  const baseRate = 50; // Базова ставка: 50 грн
  const pricePerKg = 5; // Вартість за 1 кг ваги
  const pricePerKm = 2; // Вартість за 1 км відстані

  // 3. Обчислюємо складові вартості
  const weightCost = weight * pricePerKg;
  const distanceCost = distAnce * pricePerKm;

  // Загальна вартість
  const totalCost = baseRate + weightCost + distanceCost;

  // 4. Формуємо детальний розрахунок
  const receipt = `
--- ДЕТАЛЬНИЙ РОЗРАХУНОК ДОСТАВКИ ---
• Базова ставка: ${baseRate} грн
• За вагу (${weight} кг x ${pricePerKg} грн/кг): ${weightCost} грн
• За відстань (${distAnce} км x ${pricePerKm} грн/км): ${distanceCost} грн
-------------------------------------
ЗАГАЛЬНА ВАРТІСТЬ: ${totalCost} грн
    `;

  // 5. Виводимо результат
  alert(receipt);
}
