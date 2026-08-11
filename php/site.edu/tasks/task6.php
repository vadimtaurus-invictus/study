<?php
// 1. ******************************************************************************
echo "<h4>1. Підрахунок числа в кубі</h4>";

function getCube(int|float $number): int|float
{
    return $number ** 3;
}

// Приклад використання:
echo getCube(3); //  27
echo "<br><br>";
echo "<hr>";

// 2. ******************************************************************************
echo "<h4>2. Виведення масиву у вигляді рядка через кому</h4>";

function printArray(array $arr): void
{
    echo implode(', ', $arr);
}

// Приклад використання:
$numbers = [1, 2, 3, 4, 5];
printArray($numbers); //  1, 2, 3, 4, 5
echo "<br><br>";
echo "<hr>";
// 3. ******************************************************************************
echo "<h4>3. Збільшення числа за посиланням</h4>";

function incrementValue(int|float &$num, int|float $add): void
{
    $num += $add;
}

// Приклад використання:
$value = 10;
incrementValue($value, 5);

echo $value; //  15
echo "<br><br>";
echo "<hr>";

// 4. *******************************************************************************
echo "<h4>4. Перевірка розширення файлу (.png або .jpg)</h4>";

function isImageFile(string $filename): bool
{
    $filename = strtolower($filename);
    return str_ends_with($filename, '.png') || str_ends_with($filename, '.jpg');
}

// Приклади використання:
var_dump(isImageFile('avatar.jpg'));  //(true)
echo "<br>";
var_dump(isImageFile('photo.PNG'));  //(true)
echo "<br>";
var_dump(isImageFile('document.pdf')); //(false)
