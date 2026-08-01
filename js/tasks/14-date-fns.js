// Вказання локалізації(українська) по дефолту

if (window.dateFns && dateFns.locale && dateFns.locale.uk) {
  dateFns.setDefaultOptions({ locale: dateFns.locale.uk });
}

//-------------1

console.log("форматування дати та часу--1");

const date1 = new Date(2026, 8, 15, 9, 15, 0); // Місяці в JS поч. з 0 (8 = вересень)

console.log(dateFns.format(date1, "dd-MM-yyyy 'об' HH:mm")); // "15.09.2026 об 09:15"
console.log("---------------------------");

// ----------------------2
console.log("Парсинг та валідація вводу--2");

function parseUserDeadline(inputString) {
  // Парсимо строго за шаблоном YYYY-MM-DD
  const parsedDate = dateFns.parse(inputString, "yyyy-MM-dd", new Date());

  if (dateFns.isValid(parsedDate)) {
    return parsedDate;
  } else {
    console.error(`Помилка: Введено невалідну дату "${inputString}"`);
    return null;
  }
}

// Приклад використання:
console.log(parseUserDeadline("2026-09-15")); // Date object
console.log(parseUserDeadline("2026-13-45")); // Помилка у консолі + null
console.log("---------------------------");

// ----------------------3
console.log("Обчислення дедлайну завдання--3");

const projectStart = new Date(2026, 7, 1); // 1 серпня 2026

const stage1Date = dateFns.addDays(projectStart, 10);
const stage2Date = dateFns.addMonths(projectStart, 2);

console.log("Перший етап:", dateFns.format(stage1Date, "dd.MM.yyyy")); // 11.08.2026
console.log("Другий етап:", dateFns.format(stage2Date, "dd.MM.yyyy")); // 01.10.2026
console.log("-----------------------------------");

// ----------------------4
console.log("Межі робочого тижня--4");

const wednesday = new Date(2026, 7, 12); // 12 серпня 2026

const monday = dateFns.startOfWeek(wednesday, { weekStartsOn: 1 });

console.log(dateFns.format(monday, "yyyy-MM-dd")); // "2026-08-10"
console.log("-----------------------------------");

// ----------------------5
console.log("Генератор звітного періоду--5");

const now = new Date();

const monthStart = dateFns.startOfMonth(now);
const monthEnd = dateFns.endOfMonth(now);

console.log("Початок місяця:", monthStart);
console.log(
  "Кінець місяця:",
  dateFns.format(monthEnd, "dd.MM.yyyy HH:mm:ss.SSS"),
); // Наприклад: "31.07.2026 23:59:59.999"
console.log("-----------------------------------");

// ----------------------6
console.log("Порівняння дат публікацій--6");

const pubDate1 = new Date(2026, 7, 10, 0, 0, 0); // 10 серпня 2026 00:00
const pubDate2 = new Date(2026, 7, 10, 15, 30, 0); // 10 серпня 2026 15:30

// Перевірка на абсолютну рівність (включаючи час)
const isExactlyEqual = dateFns.isEqual(pubDate1, pubDate2);
console.log("Абсолютно однакові:", isExactlyEqual); // false

// Перевірка чи припадають на один і той самий день
const isSameCalendarDay = dateFns.isSameDay(pubDate1, pubDate2);
console.log("Один і той самий день:", isSameCalendarDay); // true
console.log("-----------------------------------");

// ----------------------7
console.log("Система бронювання (Перевірка перекриття)--7");

function canBookSlot(existingStart, existingEnd, newStart, newEnd) {
  // areIntervalsOverlapping повертає true, якщо є перекриття
  const hasOverlap = dateFns.areIntervalsOverlapping(
    { start: existingStart, end: existingEnd },
    { start: newStart, end: newEnd },
  );

  // Слот вільний, якщо НЕМАЄ перекриття
  return !hasOverlap;
}

// Приклад використання:
const busyStart = new Date(2026, 7, 10, 10, 0);
const busyEnd = new Date(2026, 7, 10, 12, 0);

console.log(
  canBookSlot(
    busyStart,
    busyEnd,
    new Date(2026, 7, 10, 12, 0),
    new Date(2026, 7, 10, 13, 0),
  ),
); // true (накладання немає)
console.log(
  canBookSlot(
    busyStart,
    busyEnd,
    new Date(2026, 7, 10, 11, 0),
    new Date(2026, 7, 10, 13, 0),
  ),
); // false (перекривається)
console.log("-----------------------------------");

// ----------------------8
console.log("Підрахунок тривалості проекту--8");

const pStart = new Date(2026, 0, 15); // 15 січня 2026
const pEnd = new Date(2026, 6, 25); // 25 липня 2026

const totalWeeks = dateFns.differenceInWeeks(pEnd, pStart);
const totalDays = dateFns.differenceInDays(pEnd, pStart);

console.log(
  `Тривалість проекту: ${totalWeeks} повних тижнів (${totalDays} днів)`,
);
console.log("-----------------------------------");

// ----------------------9
console.log("Відображення відносного часу--9");

const pastDate = new Date(2026, 0, 1); // 1 січня 2026

const relativeTime = dateFns.formatDistanceToNow(pastDate, {
  addSuffix: true,
});

console.log(relativeTime); // Наприклад: "близько 7 місяців тому"
console.log("-----------------------------------");

// ----------------------10
console.log("Побудова сітки для розкладу на тиждень--10");

const scheduleDays = dateFns.eachDayOfInterval({
  start: new Date(2026, 7, 10), // 10 серпня 2026
  end: new Date(2026, 7, 16), // 16 серпня 2026
});

scheduleDays.forEach((day) => {
  console.log(dateFns.format(day, "dd.MM (EEEE)"));
});
/*
Вивід у консоль:
10.08 (понеділок)
11.08 (вівторок)
12.08 (середа)
13.08 (четвер)
14.08 (п'ятниця)
15.08 (субота)
16.08 (неділя)
*/
