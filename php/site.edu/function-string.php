<?php

$str = "lorem ipsum amet dolor sit amet consectetur adipisicing amet elit";
$str2 = "Привіт, світ!";
$str3 = "HELLO!";
// зміна символу за індексом
// Lorem 1psum ...
$str[6] = 1;
echo $str . "<br>";

// ++++++++++++++++++++++++++++++++ для кириличних символів додавати mb_ перед функцією - напр: mb_strtoupper!!!!!!!!!!!!!!
// ****************   Зміна регістру літер

echo strtoupper($str) . "<br>";    // LOREM 1PSUM DOLOR ...

echo mb_strtoupper($str2) . "<br>";      //ПРИВІТ, СВІТ!

echo mb_strtolower($str3) . "<br>";      //hello!

// ****************   Зміна регістру ПЕРШОЇ літери

// більша
echo ucfirst($str) . "<br>";
// менша
echo lcfirst($str3) . "<br>";

// ****************   Кожне Слово З Великої Літери

echo ucwords($str) . "<br>";   //Lorem 1psum Dolor Sit Amet Consectetur Adipisicing Elit

// ************** довжина рядка

echo strlen($str) . "<br>";   //55 символів

// отримати підрядок
echo substr($str, 12, 5) . "<br>";   //dolor

// ***************** Зміна всіх входжень рядка пошуку на рядок заміни


echo str_replace(['o', 't'], ['0', 'T'], $str) . "<br>";  //   l0rem 1psum ameT d0l0r siT ameT c0nsecTeTur adipisicing ameT eliT

//-*------------повертає позицію входження підрядка

echo strpos($str, "amet") . "<br>"; //  12

//-*------------повертає позицію  останнього входження підрядка

echo strrpos($str, "amet") . "<br>"; //  56


// розбити рядок за допомогою роздільника

$result = explode(' ', $str);
print_r($result) . "<br>";   //    Array ( [0] => lorem [1] => 1psum [2] => amet [3] => dolor [4] => sit [5] => amet [6] => consectetur [7] => adipisicing [8] => amet [9] => elit )

// ***************** Об'єднання елементів масиву у рядок за допомогою роздільника

echo implode('_', $result) . "<br>";  //  lorem_1psum_amet_dolor_sit_amet_consectetur_adipisicing_amet_elit

$arr = range(1, 10);
echo implode(', ', $arr) . "<br>";  //  1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// ******************************** Перетворення рядка на масив по вказаній кількості символів

$str4 = "abcdef";
$result = str_split($str4, 2);
echo implode(', ', $result) . "<br>";  //ab, cd, ef

// ************ Видалення пробілів, або інших не видимихсимволів по краям рядка

echo  trim("      Hello world     ");  //браузер автоматично прибирає пробіли по краям
