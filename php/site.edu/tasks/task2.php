<?php
echo "<h3>Завдання 1</h3>";

for ($i = 5; $i <= 15; $i++) {
    echo $i . "<br>";
}
// *************************************************************************************************
echo "<h3>Завдання 2</h3>";

$n = rand(20, 40);
echo "Згенероване число N = $n<br><br>";

for ($i = 10; $i <= $n; $i += 2) {
    echo $i . "<br>";
}
// *************************************************************************************************
echo "<h3>Завдання 3</h3>";

$randomNumber = rand(1, 10);
echo "Таблиця множення для числа: $randomNumber<br><br>";

for ($i = 1; $i <= 10; $i++) {
    $result = $randomNumber * $i;
    echo "{$randomNumber} х {$i} = {$result}<br>";
}

echo "<h3>Завдання 4</h3>";

$num = 1;
echo "<table border='1' cellpadding='8' cellspacing='0'>";
for ($row = 1; $row <= 5; $row++) {
    echo "<tr>";
    for ($col = 1; $col <= 5; $col++) {
        echo "<td>{$num}</td>";
        $num++;
    }
    echo "</tr>";
}
echo "</table>";
// *************************************************************************************************

echo "<h3>Завдання 5</h3>";

$rows = 5;
$cols = 5;

echo "<table border='1' cellpadding='10' cellspacing='0' style='text-align: center;'>";

for ($r = 0; $r < $rows; $r++) {
    echo "<tr>";
    for ($c = 0; $c < $cols; $c++) {
        $val = rand(-20, 20);

        // Визначення кольору за умовами завданняРозбивка по кольорам
        if ($val <= -10) {
            $bgColor = "blue";
            $textColor = "white"; 
        } elseif ($val > -10 && $val <= 0) {
            $bgColor = "lightblue";
            $textColor = "black";
        } elseif ($val > 0 && $val <= 10) {
            $bgColor = "green";
            $textColor = "white";
        } else { // більше 10
            $bgColor = "brown";
            $textColor = "white";
        }

        echo "<td style='background-color: {$bgColor}; color: {$textColor};'>{$val}</td>";
    }
    echo "</tr>";
}

echo "</table>";
// *************************************************************************************************
