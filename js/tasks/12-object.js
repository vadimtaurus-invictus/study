// Task 1: *******************************Створення об'єкта
console.log("=== Task 1 ===");
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car);

// *******************************Task 2: Доступ до властивостей об'єкта
console.log("\n=== Task 2 ===");
const userTask2 = { name: "Ivan", age: 25 };
console.log(userTask2.name);
console.log(userTask2.age);

// Task 3: *****************************Додавання нових властивостей
console.log("\n=== Task 3 ===");
const userTask3 = { name: "Anna", age: 22 };
userTask3.city = "Kyiv";
console.log(userTask3);

// Task 4: **********************************Зміна значення властивості
console.log("\n=== Task 4 ===");
const book = { title: "JS Basics", author: "John Doe", price: 15 };
book.price = 20;
console.log(book);

// Task 5: ************************************Видалення властивості
console.log("\n=== Task 5 ===");
const person = { name: "Oleg", age: 30 };
delete person.age;
console.log(person);

// Task 6:************************************ Копіювання об'єкта
console.log("\n=== Task 6 ===");
const student = { name: "Alex", grade: "A" };
const studentCopy = { ...student };
studentCopy.grade = "B";
console.log("student:", student);
console.log("studentCopy:", studentCopy);

// Task 7: *************************************Додавання методу в об'єкт
console.log("\n=== Task 7 ===");
const calculator = {
  a: 4,
  b: 6,
  sum() {
    return this.a + this.b;
  }
};
console.log(calculator.sum());

// Task 8:******************************************** Масив об'єктів
console.log("\n=== Task 8 ===");
const users = [
  { name: "Anna", age: 25 },
  { name: "Anton", age: 30 },
  { name: "Clara", age: 22 }
];
console.log(users[1].name);

// Task 9: ****************************************Пошук у масиві об'єктів
console.log("\n=== Task 9 ===");
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 }
];

function findProduct(productName) {
  return products.find(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
}
console.log(findProduct("phone"));

// Task 10: *************************************Об'єкт із властивістю-масивом
console.log("\n=== Task 10 ===");
const group = { name: "Team A", members: ["Alice", "Bob"] };
group.members.push("Charlie");
console.log(group);

// Task 11: *****************************************Об'єкт із вкладеним об'єктом
console.log("\n=== Task 11 ===");
const library = {
  name: "City Library",
  books: {
    count: 2,
    titles: ["Book 1", "Book 2"]
  }
};
library.books.count = 3;
library.books.titles.push("Book 3");
console.log(library);

// Task 12: *********************************************Перевірка наявності властивості
console.log("\n=== Task 12 ===");
const employee = { name: "Kate", position: "Manager" };
console.log("salary" in employee);

// Task 13: *******************************************Перебір властивостей об'єкта
console.log("\n=== Task 13 ===");
const fruit = { apple: 10, banana: 5, orange: 8 };
for (const key in fruit) {
  console.log(`${key}: ${fruit[key]}`);
}

// Task 14: *************************************************Об'єднання об'єктів
console.log("\n=== Task 14 ===");
const user1 = { name: "John", age: 30 };
const user2 = { city: "London", job: "Developer" };
const user3 = { ...user1, ...user2 };
console.log(user3);

// Task 15: ************************************Об'єкт з обчислюваними властивостями
console.log("\n=== Task 15 ===");
const scores = { Alice: 90, Bob: 78 };
const newStudentName = "Tom";
scores[newStudentName] = 85;
console.log(scores);