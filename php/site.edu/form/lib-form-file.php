<?php
// ****************************************Масив даних форми
$filds = [
    'commodity' => ['field_name' => "Товар"],
    'count'     => ['field_name' => "Кількість"],
    'name'      => ['field_name' => "Прізвище, ім'я"],
    'phone'     => ['field_name' => "Телефон"],
    'address'   => ['field_name' => "Адреса доставки"],
    'captcha'   => ['field_name' => "Captcha"]
];

// *******************Функція завантаження даних з форми
function load(&$data)
{
    foreach ($_POST as $key => $val) {
        if (array_key_exists($key, $data)) {
            $data[$key]['val'] = trim($val);
        }
    }
}
// *******************Функція валідації даних форми
function validate($data)
{
    $rezult = "";
    foreach ($data as $key => $val) {
        if (empty($val['val'])) {
            $rezult .= "<li>Потрібно заповнити поле {$val['field_name']}</li>";
        }
    }

    // *******************Перевіряємо капчу тільки якщо вона заповнена та є в сесії
    $userCaptcha = $data['captcha']['val'] ?? '';
    if (!checkCaptcha($userCaptcha)) {
        $rezult .= "<li>Неправильна відповідь на приклад (captcha)</li>";
    }

    return $rezult;
}
// *******************Функція автозаповнення форми після помилки
function autoWriteForm($data)
{
    // *******************Безпечна передача даних через json_encode
    $jsonData = json_encode([
        'commodity' => $data['commodity']['val'] ?? '',
        'count'     => $data['count']['val'] ?? '',
        'name'      => $data['name']['val'] ?? '',
        'phone'     => $data['phone']['val'] ?? '',
        'address'   => $data['address']['val'] ?? '',
    ], JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP);
    // *******************Виводимо скрипт для автозаповнення форми
    echo "<script>
    window.addEventListener('DOMContentLoaded', function() {
        const data = {$jsonData};
        const form = document.forms.main;
        if (form) {
            if (data.commodity) form.commodity.value = data.commodity;
            if (data.count) form.count.value = data.count;
            if (data.name) form.name.value = data.name;
            if (data.phone) form.phone.value = data.phone;
            if (data.address) form.address.value = data.address;
        }
    });
    </script>";
}
// *******************Функція для виводу даних у зручному форматі
function testPrint($data)
{
    echo '<pre>' . htmlspecialchars(print_r($data, true)) . '</pre>';
}
// *******************Функція генерації капчі
function setCaptcha()
{
    $num1 = rand(1, 20);
    $num2 = rand(1, 20);
    $_SESSION['captcha'] = $num1 + $num2;
    return "Скільки буде $num1 + $num2?";
}
// *******************Функція перевірки капчі
function checkCaptcha($res)
{
    return isset($_SESSION['captcha']) && (int)$_SESSION['captcha'] === (int)$res;
}
// *******************Функція запису замовлення в файл
function addOrderInFile($data)
{
    $file = fopen('order.txt', 'a');
    if ($file) {
        $str = date('d.m.Y H:i') . "|{$data['name']['val']}|{$data['phone']['val']}|{$data['address']['val']}|{$data['commodity']['val']}|{$data['count']['val']}\n";
        fwrite($file, $str);
        fclose($file);
    }
}
