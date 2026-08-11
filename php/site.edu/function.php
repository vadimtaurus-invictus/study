<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    require_once __DIR__ . "/lib.php";
    echo info("Юлія", 1992) . "<br>";
    echo info("Вадим", 1988) . "<br>";

    echo info2("Павло", 1990) . "<br>";
    echo info2("Олена") . "<br>";


    $number = 12;
    add3($number);
    echo "($number)<br>";

    echo sum(2, 6, 5.2, 8) . "<br>";
    echo sum(2, 6, 5.2, 8, 2.4, 7.1, 3) . "<br>";

    $arr = range(1, 30, 3);
    echo implode(", ", $arr) . "<br>";
    echo sumaArray($arr) . "<br>";
    $arr2 = createArr2Rand(3, 5, 1, 9);
    print_r($arr2);
    echo "<br>";
    $arr3 = createArr2Rand(5, 4, 10, 99);
    print_r($arr3);
    echo "<br>";
    printArray2($arr2);
    printArray2($arr3);
    ?>
</body>

</html>