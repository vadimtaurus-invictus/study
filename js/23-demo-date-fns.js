// Вказання локалізації(українська) по дефолту

if (window.dateFns && dateFns.locale && dateFns.locale.uk) {
  dateFns.setDefaultOptions({ locale: dateFns.locale.uk });
}

// ***************************---------------//////////////////////////////////////

// Сьогоднішня дата
console.log("Сьогоднішня дата");

const now = new Date();

// конкретна дата (місяці рахуються з 0, січень не 1 місяць, а 0)
// 31 липня(календарний-7, JS-6)2025року 9:58
const myDate = new Date(2025, 6, 31, 9, 58);

console.log(now);
console.log(myDate);

// **-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Форматований вивід

// дата(тепер)
console.log(dateFns.format(now, "dd-MM-yyyy")); // 31-07-2026
// час (тепер)
console.log(dateFns.format(now, "HH:mm:ss")); // 10:14:40
// дата і час разом
console.log(dateFns.format(now, "'Сьогодні:'eee dd MMM yyyy HH:mm:ss")); //Сьогодні:птн 31 лип. 2026 10:57:25

console.log("-----------------------------------------------");

// +++++++++++++++++++++++++++++++++++++++++++Парсинг рядка в дату++++++++++++++++++++++
console.log("Парсинг рядка в дату");

const dateStr = "01/05/1988 17:45";
const formatPattern = "dd/MM/yyyy HH:mm";

const parserDate = dateFns.parse(dateStr, formatPattern, new Date());

// Вивід простий:
console.log(parserDate);
// форматований:
console.log(dateFns.format(parserDate, "eee dd MMMM yyyy HH:mm:ss"));
console.log("-----------------------------------------------");

// ----------------------------Функція isValid перевірка об'єкту дата****************
console.log("Функція isValid перевірка об'єкту дата");

console.log(dateFns.isValid(new Date())); // true

console.log(dateFns.isValid(new Date("4545bhhv"))); // false

// ****************!!!!!!    Приклад функції парсингу рядка з датою від користувача************!!!!!!!
console.log("функції парсинг рядка з датою від користувача");

function parserUserInput(str) {
  const parsed = dateFns.parse(str, "dd.MM.yyyy", new Date());
  if (!dateFns.isValid(parsed)) {
    console.error("Некоректний формат дати: очікується ДД.ММ.РРРР");
    return null;
  }

  return parsed;
}

console.log(parserUserInput("24.04.2025")); //ok
console.log("--------некоректно введена дата --35,04");
console.log(parserUserInput("35.04.2025")); // не ok  -error
console.log("-------------------------------------------");

// //////////////****----------------Додавання днів, місяців, років------------------********////////
console.log("Додавання днів, місяців, років");

const today = new Date();
//
const add10Days = dateFns.addDays(today, 10);
const add3Months = dateFns.addMonths(today, 3);
const add1Years = dateFns.addYears(today, 1);

console.log(dateFns.format(add10Days, "dd.MM.yyyy"));
console.log(dateFns.format(add3Months, "dd.MM.yyyy"));
console.log(dateFns.format(add1Years, "dd.MM.yyyy"));
console.log("-------------------------------------------");

// **********************************************************Віднімання днів, годин ****************
console.log("Віднімання днів, годин");

const sub10Days = dateFns.subDays(today, 10);
const sub30Hours = dateFns.subHours(today, 30);

console.log(dateFns.format(sub10Days, "dd.MM.yyyy HH:mm"));
console.log(dateFns.format(sub30Hours, "dd.MM.yyyy HH:mm"));
console.log("-------------------------------------------");

//************** */ Початок і кінець місяця************
console.log("Початок і кінець місяця");

const startMonth = dateFns.startOfMonth(today);
const endMonth = dateFns.endOfMonth(today);

console.log(dateFns.format(startMonth, "dd.MM.yyyy HH:mm"));
console.log(dateFns.format(endMonth, "dd.MM.yyyy HH:mm"));
console.log("-------------------------------------------");

// ********************************** Початок і кінець тижня****************
console.log("Початок і кінець тижня");

// 1.  { weekStartsOn: 1 } -початок тижня з понеділка
const startWeek = dateFns.startOfWeek(today, { weekStartsOn: 1 });
//2.
const endWeek = dateFns.endOfWeek(today, { weekStartsOn: 1 });

console.log(dateFns.format(startWeek, "dd.MM.yyyy HH:mm"));
console.log(dateFns.format(endWeek, "dd.MM.yyyy HH:mm"));
console.log("-------------------------------------------");

// ********************-----------  Порівняння дат ------***********************
console.log("******Порівняння дат***********");

const date1 = new Date(2026, 6, 20);
const date2 = new Date(2026, 7, 21);

// **********//////////////////////*Порівняння дат раніше і пізніше
console.log(dateFns.isBefore(date1, date2)); // true
console.log(dateFns.isAfter(date1, date2)); // false
console.log("-------------------------------------------");

// **************************** Перевірка на пройдення дати**********************
console.log("Перевірка на пройдення дати");

// сьогодні 31.6.2026(за стилем JS)(календарно 31.07.2026)
console.log(dateFns.isPast(date1)); // true

console.log(dateFns.isFuture(date2)); // true
console.log("-------------------------------------------");

// ********************************  Порівняння часу  **********
console.log("Порівняння часу");

const time1 = new Date(2026, 6, 15, 10, 0);
const time2 = new Date(2026, 6, 15, 18, 20);

// Абсолютна точність(до мілісекунд)
console.log(dateFns.isEqual(time1, time2)); // false

// точність до дня
console.log(dateFns.isSameDay(time1, time2)); // true
console.log("-------------------------------------------");

// *************************************  Пересікання дат ******************************
console.log("+++++++++ Пересікання дат ++++++++++++++");
// ---------------------Перевірка бронювання--------------------------------------

// Існуюче бронювання
const booking = {
  start: new Date(2026, 6, 15),
  end: new Date(2026, 6, 21),
};

// Заявка від клієнта
const newBooking = {
  start: new Date(2026, 6, 19),
  end: new Date(2026, 6, 25),
};

// Перевірка перекриття інтервалів
const isOverlapping = dateFns.areIntervalsOverlapping(booking, newBooking);

if (isOverlapping) {
  console.log("Обрані дати зайняті. Оберіть інший період");
} else {
  console.log("Бронювання успішне");
}
console.log("-------------------------------------------");

// **************************************Різниця між датами***********
console.log("Різниця між датами");

// ----------різниця в днях----
const diffDays = dateFns.differenceInDays(date2, date1);

console.log("Днів:", diffDays); //32

// ----------різниця в тижнях----
const diffWeeks = dateFns.differenceInWeeks(date2, date1);

console.log("Тижнів:", diffWeeks); //4 повні тижні
console.log("-------------------------------------------");

// *****************************Відносний час****************
console.log("----Відносний (приблизний) час----");

const comentDate = new Date(2026, 6, 31, 10, 0);

console.log(dateFns.formatDistanceToNow(comentDate));

// вивід  з суфіксом"тому" або "через"
console.log(
  dateFns.formatDistanceToNow(comentDate, {
    addSuffix: true,
  }),
);
// *****************--------------********

console.log("Відносний час між датами");

// Дати(початок і кінець)  ------------
const dateStart = new Date(2024, 6, 20);
const dateEnd = new Date(2026, 7, 21);

console.log(dateFns.formatDistance(dateStart, dateEnd));

console.log("--------------------------------------");

// ******************************* Діапазон дат******************************************
console.log("--Діапазон дат--");

const interval = {
  start: new Date(2026, 7, 1),
  end: new Date(2026, 7, 10),
};
// Формуємо масив дат за інтервалом
const daysArray = dateFns.eachDayOfInterval(interval);

// Вивід через for of
for (const day of daysArray) {
  console.log(dateFns.format(day, "dd.MM (EEEE"));
}

//              +++******************  Таймер зворотнього відліку **********************************+++
console.log("------------Таймер зворотнього відліку---------");

function getTimeEvent(targetDate) {
  const now = new Date();

  // ----------------------------------якщо подія відбулася
  if (dateFns.isBefore(targetDate, now)) {
    return "Подія вже відбулася";
  }

  const days = dateFns.differenceInDays(targetDate, now);

  const dateAfterDays = dateFns.addDays(now, days);
  const hours = dateFns.differenceInHours(targetDate, dateAfterDays);

  return `До 2027 року залишилося ${days} дн. та ${hours} год.`;
}
//--------------------------------(31 грудня 2026 23:59:59)
console.log(getTimeEvent(new Date(2026, 11, 31, 23, 59, 59)));
