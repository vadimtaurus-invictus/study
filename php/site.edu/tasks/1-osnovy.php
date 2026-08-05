<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання PHP</title>
</head>

<body>
    <h2>Основи php</h2>

    <h4>завдання1 Арифметичні операції</h4>
    <?php
    $a = 10;
    $b = rand(1, 20);

    echo "Сума: " . ($a + $b) . "<br>";
    echo "Різниця: " . ($a - $b) . "<br>";
    echo "Добуток: " . ($a * $b) . "<br>";
    echo "Частка: " . ($a / $b) . "<br>";
    ?>

    <h4>завдання2 Форматування рядка (Інтерполяція)</h4>
    <?php
    $name = "Саша";
    $age = 25;

    $rezul = "Привіт! Мене звати $name, мені $age років.";
    echo $rezul;
    ?>

    <h4>завдання3 Переведення секунд у хвилини та секунди</h4>
    <?php
    $totalSeconds = 135;

    $minutes = floor($totalSeconds / 60); // цілі хвилини
    $seconds = $totalSeconds % 60;        // залишок секунд

    echo "Пройшло цілих хвилин: $minutes, секунд: $seconds";
    ?>

    <h4>завдання4 Перевірка на парність/непарність</h4>
    <?php
    $num = rand(1, 100);

    if ($num % 2 == 0) {
        echo "Число $num — парне";
    } else {
        echo "Число $num — непарне";
    }
    ?>

    <h4>завдання5 Порівняння двох чисел</h4>
    <?php
    $n1 = rand(1, 10);
    $n2 = rand(1, 10);

    if ($n1 > $n2) {
        echo "$n1 більше за $n2";
    } elseif ($n1 < $n2) {
        echo "$n1 менше за $n2";
    } else {
        echo "$n1 дорівнює $n2";
    }
    ?>

    <h4>завдання6 Сума цифр п'ятизначного числа</h4>
    <?php
    $num = 54321;
    $strNum = (string)$num; // конвертуємо число в рядок

    $sum = $strNum[0] + $strNum[1] + $strNum[2] + $strNum[3] + $strNum[4];

    echo "Сума цифр числа $num дорівнює: $sum";
    ?>

    <h4>завдання7 Визначення пори року за номером місяця</h4>
    <?php
    $month = rand(1, 12);

    switch ($month) {
        case 12:
        case 1:
        case 2:
            $season = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            $season = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            $season = "Літо";
            break;
        case 9:
        case 10:
        case 11:
            $season = "Осінь";
            break;
        default:
            $season = "Некоректний номер місяця";
    }

    echo "Місяць №$month — це $season";
    ?>

    <h4>завдання8 Модифікація числа за парністю</h4>

    <?php
    $num = rand(1, 100);
    echo "<p>$num</p>";
    if ($num % 2 == 0) {
        $num /= 2;
    } else {
        $num += 5;
    }
    echo "<p>$num</p>";
    ?>

    <h4>завдання9 Сортування трьох чисел за зростанням</h4>
    <?php
    $num1 = rand(1, 20);
    $num2 = rand(1, 20);
    $num3 = rand(1, 20);

    if ($num1 <= $num2 && $num2 <= $num3) {
        echo "$num1  $num2  $num3";
    } elseif ($num1 <= $num3 && $num3 <= $num2) {
        echo "$num1  $num3  $num2";
    } elseif ($num2 <= $num3 && $num3 <= $num1) {
        echo "$num2  $num3  $num1";
    } elseif ($num2 <= $num1 && $num1 <= $num3) {
        echo "$num2  $num1  $num3";
    } elseif ($num3 <= $num1 && $num1 <= $num2) {
        echo "$num3  $num1  $num2";
    } elseif ($num3 <= $num2 && $num2 <= $num1) {
        echo "$num3  $num2  $num1";
    }
    ?>

    <h3>Додаткові завдання</h3>

    <h4>Перевірка розміру листівки та конверта</h4>

    <!-- Логіка: Зазор 1 мм з кожного боку означає, 
     що реальний доступний розмір усередині конверта на 2 мм менший з кожного боку ($a - 2$ та $b - 2$). 
     Також враховуємо, що листівку можна повернути на 90 градусів. -->
    <?php
    $a = 100; // ширина конверта (мм)
    $b = 150; // висота конверта (мм)

    $c = 95;  // ширина листівки (мм)
    $d = 145; // висота листівки (мм)

    // Доступний внутрішній розмір
    $maxW = $a - 2;
    $maxH = $b - 2;

    // Перевіряємо обидва варіанти розміщення (прямо або повернувши)
    $fitsNormal = ($c <= $maxW && $d <= $maxH);
    $fitsRotated = ($d <= $maxW && $c <= $maxH);

    if ($fitsNormal || $fitsRotated) {
        echo "Листівка поміститься в конверт.";
    } else {
        echo "Листівка НЕ поміститься в конверт.";
    }
    ?>
    <!-- *************************************************************** -->

    <h4>Порівняння швидкостей (км/год проти м/с)</h4>
    <!--  Логіка: Щоб перевести км/год у м/с, потрібно поділити значення на 3.6 ($1 \text{ км/год} = \frac{1000 \text{ м}}{3600 \text{ с}} = \frac{1}{3.6} \text{ м/с}$). -->
    <?php
    $speedKmH = 72; // швидкість у км/год
    $speedMS = 15;  // швидкість у м/с

    // Переводимо км/год у м/с для однакового порівняння
    $speedKmH_converted = $speedKmH / 3.6;

    echo "Перша швидкість ($speedKmH км/год) = " . round($speedKmH_converted, 2) . " м/с <br>";
    echo "Друга швидкість = $speedMS м/с <br><br>";

    if ($speedKmH_converted > $speedMS) {
        echo "Перша швидкість ($speedKmH км/год) більша.";
    } elseif ($speedKmH_converted < $speedMS) {
        echo "Друга швидкість ($speedMS м/с) більша.";
    } else {
        echo "Швидкості однакові.";
    }
    ?>


</body>

</html>