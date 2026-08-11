<?php
function info(string $name, int $year)
{
    return "Мене звати $name, мені:  " . (date("Y") - $year) . "роки(ів) ";
}

function info2(string $name, int $year = 2000)
{
    return "Мене звати $name, мені:  " . (date("Y") - $year) . "роки(ів) ";
}

function add3(int|float &$num)
{
    $num += 3;
    print_r($num);
}

function sum(int|float ...$nums)
{
    $result = 0;
    foreach ($nums as $val) {
        $result += $val;
    }
    return $result;
}

// *********************************10.08.26
function sumaArray(array $arrayNums)
{
    $result = 0;
    foreach ($arrayNums as $val) {
        $result += $val;
    }
    return $result;
}

$arr = range(1, 30, 3);
echo implode(", ", $arr) . "<br>";
echo sumaArray($arr) . "<br>";

// ------- створення двовимірного масиву з випадковими значеннями
// Параметри: 1 Величина масиву(n x m), 
// діапазон значень для заповнення (min, max) 
// Результат функції: новий масив
function createArr2Rand(int $n, int $m, int $min, int $max): array
{
    $result = [];
    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j < $m; $j++) {
            $result[$i][$j] = rand($min, $max);
        }
    }
    return $result;
}
// *****************************
function printArray2(array $arr)
{
    echo "<table>";
    foreach ($arr as $row) {
        echo "<tr>";
        foreach ($row as $val) {
            echo "<td>$val</td>";
        }
        echo "</tr>";
    }
}
