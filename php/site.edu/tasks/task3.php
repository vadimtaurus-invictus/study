<?php
echo "<h3>Завдання 1. Масив з 8 рандомних чисел</h3><br>";

// 1. Створення масиву з 8 випадкових чисел від 1 до 50
$numbers = [];
for ($i = 0; $i < 8; $i++) {
    $numbers[] = rand(1, 50);
}

// Виведення початкового масиву
echo "<b>Початковий масив: <b><br>" . implode(", ", $numbers) . "<br>";

// 2. Обчислення суми елементів масиву
$sum = array_sum($numbers);
echo "Сума елементів масиву: $sum<br>";

// 3. Множення непарних чисел на 2
foreach ($numbers as &$value) {
    if ($value % 2 !== 0) {
        $value *= 2;
    }
}
unset($value); // Розриваємо посилання після foreach

echo "Масив після множення непарних елементів на 2: <br>" . implode(", ", $numbers) . "<br>";
echo "<br><br>";
//                                                    *************************************************************
echo "<h3>Завдання 2. Двовимірний масив 4х4</h3><br>";
// 1. Створення двовимірного масиву 4х4
$matrix = [];
$sum2d = 0;

for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 4; $j++) {
        $matrix[$i][$j] = rand(1, 20);
        $sum2d += $matrix[$i][$j];
    }
}

// 2. Виведення початкового масиву
echo "<b>Початковий двовимірний масив:</b><br>";
foreach ($matrix as $row) {
    echo implode("&nbsp;&nbsp;&nbsp;&nbsp;", $row) . "<br>";
}

// 3. Сума всіх елементів
echo "<br>Сума всіх елементів масиву: $sum2d <br><br>";

// 4. Заміна парних елементів на "+", а непарних на "*"
$modifiedMatrix = [];
foreach ($matrix as $i => $row) {
    foreach ($row as $j => $val) {
        $modifiedMatrix[$i][$j] = ($val % 2 === 0) ? '+' : '*';
    }
}

echo "<b>Масив після заміни парних на '+' та непарних на '*':</b><br>";
foreach ($modifiedMatrix as $row) {
    echo implode("&nbsp;&nbsp;&nbsp;&nbsp;", $row) . "<br>";
}
echo "<br><br>";
//                                                    *************************************************************
echo "<h3>Завдання 3. Асоціативний масив «Прізвище => Зарплата»</h3>";

// 1. Створення асоціативного масиву
$salaries = [
    "Шевченко"  => 32000,
    "Ковальчук" => 25000,
    "Мельник"   => 18000,
    "Бондаренко" => 45000,
    "Ткаченко"  => 21000
];

// Виведення масиву
echo "<b>Список працівників та їх зарплати:</b><br>";
foreach ($salaries as $surname => $salary) {
    echo "$surname: $salary грн<br>";
}

// 2. Загальна сума зарплати
$totalSalary = array_sum($salaries);
echo "<br><b>Загальна сума зарплати:</b> $totalSalary грн<br>";

// 3. Пошук найбільшої та найменшої зарплати
$maxSalary = max($salaries);
$minSalary = min($salaries);

// Знаходимо прізвища працівників з відповідними зарплатами
$maxEmployees = array_keys($salaries, $maxSalary);
$minEmployees = array_keys($salaries, $minSalary);

echo "Найбільша зарплата ($maxSalary грн): " . implode(", ", $maxEmployees) . "<br>";
echo "Найменша зарплата ($minSalary грн): " . implode(", ", $minEmployees) . "<br>";
echo "<br><br>";

//                                                    *************************************************************
echo "<h3>Завдання 4. Пошук найбільшого елемента та його індексу</h3><br>";

$arr = [12, 45, 89, 23, 67, 89, 5];

// Знаходимо максимальний елемент
$maxVal = max($arr);

// Знаходимо перші індекси максимального елемента
$maxIndex = array_search($maxVal, $arr);

echo "Масив: " . implode(", ", $arr) . "<br>";
echo "Найбільший елемент: <b>$maxVal</b><br>";
echo "Індекс найбільшого елемента: <b>$maxIndex</b><br>";
echo "<br><br>";
//                                                    *************************************************************
echo "<h3>Завдання 5. Підрахунок кількості повторень значення</h3><br>";

$arr = [5, 12, 7, 5, 8, 5, 20, 12, 5];
$num = 5;

// Перебіг масиву та підрахунок входжень $num
$count = 0;
foreach ($arr as $item) {
    if ($item === $num) {
        $count++;
    }
}

echo "Масив: " . implode(", ", $arr) . "<br>";
echo "Шукане значення (num): <b>$num</b><br>";
echo "Значення <b>$num</b> повторюється в масиві <b>$count</b> раз(ів).<br>";
