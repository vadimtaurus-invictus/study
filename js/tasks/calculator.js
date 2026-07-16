function calculate() {
  // Зчитуємо значення з полів введення та перетворюємо їх на числа
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultElement = document.getElementById("result");

  // Перевірка на числа
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Будь ласка, введіть обидва числа!";
    resultElement.style.color = "red";
    return;
  }

  let result;

  // Логіка калькулятора за допомогою if-else
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      resultElement.textContent = "Помилка: ділення на 0!";
      resultElement.style.color = "red";
      return;
    }
    result = num1 / num2;
  } else {
    resultElement.textContent = "Невідома операція";
    resultElement.style.color = "red";
    return;
  }

  // Виведення результату на екран
  resultElement.textContent = `Результат: ${result}`;
  resultElement.style.color = "#28a745"; //- все ок
}
