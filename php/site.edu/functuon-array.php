<?php

// range - створює масив, що містить діапазон елементів
$arr = range(1, 10);
print_r(range(1, 10));
echo "<br>";
print_r(range(1, 30, 3));
echo "<br>";
print_r(range(20, 10));
echo "<br>";
print_r(range("a", "f"));

// array_sum() - сума значень елементів масиву
$suma = array_sum($arr);
echo "<br>" . $suma;


//  array_product - добуток значень елементів масиву

$prod = array_product($arr);

// count - кількість елементів в масиві
echo "<br>" . count($arr);   // 10

// in_array - перевіряє чи є елемент(и) в масиві
echo "<br>" . in_array(5, $arr); // true
echo "<br>" . in_array(12, $arr);  // false

// array_merge -об'єднання кількох масивів в один
$arr1 = [1, 2, 3, 4, 5];
$arr2 = ['a', 'b', 'c', 'd', 'e'];
$result = array_merge($arr1, $arr2);
echo "<br>";
print_r($result);
echo "<br><br>";

// array_slice -вибирає зріз масиву
$result = array_slice($arr, 2, 4);
print_r($result);
echo "<br><br>";

// array_keys - повертає масив ключів асоціативного масиву

$arr3 = ["Саша" => 31, "Коля" => 28, "Іра" => 29, "Оля" => 25];
$result = array_keys($arr3);
print_r($result);
echo "<br><br>";

// array_values - повертає масив значень асоціативного масиву

$result = array_values($arr3);
print_r($result);
echo "<br><br>";

//array_combine -створює новий масив використовуючи 
// один масив для ключів , 
// другий - значення
$result = array_combine($arr2, $arr1);
print_r($result);
echo "<br><br>";

// array_rand - вибирає випадково один, або декілька ключів з масиву
$result = array_rand($arr3, 2);
print_r($result);
echo "<br><br>";

// Лото

$loto = range(1, 36);
$win = array_rand($loto, 5);
echo "Виграшна комбінація: (";
foreach ($win as $val) {
    $val++;
    echo " $val ";
}
echo " )<br><br>";

// shuffle - перемішує масив

shuffle($arr);
print_r($arr);
echo "<br><br>";

// sort -сортує масив за зростанням
sort($arr);
print_r($arr);
echo "<br><br>";
