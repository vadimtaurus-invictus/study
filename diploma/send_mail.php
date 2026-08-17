<?php


header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Метод не дозволено.']);
    exit;
}

// Підключення класів PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'Exception.php';
require 'PHPMailer.php';

if (file_exists('SMTP.php')) {
    require 'SMTP.php';
}

// Отримуання та очищення даних з форми
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Валідація
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Будь ласка, заповніть усі обов\'язкові поля.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Вказано некоректну електронну адресу.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // --- НАЛАШТУВАННЯ SMTP СЕРВЕРА GMAIL ---
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    // пошта та Пароль Додатка (App Password)
    $mail->Username   = 'vadimtaurus007@gmail.com';
    $mail->Password   = 'ticy cszo ufui dxec'; //пароль додатка

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // --- НАЛАШТУВАННЯ ВІДПРАВНИКА ТА ОДЕРЖУВАЧА ---
    $mail->setFrom('vadimtaurus007@gmail.com', 'Форма з сайту ДМШ');
    $mail->addAddress('vadimtaurus007@gmail.com'); // Отримувач
    $mail->addReplyTo($email, $name); // При натисканні "Відповісти" у пошті, відповідь піде клієнту

    // --- ВМІСТ ЛИСТА ---
    $mail->isHTML(false);
    $mail->Subject = "Нове повідомлення з сайту: " . $name;

    $email_content = "Отримано нове повідомлення з контактної форми сайту:\n\n";
    $email_content .= "Ім'я: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n\n";
    $email_content .= "Повідомлення:\n" . $message . "\n";

    $mail->Body = $email_content;

    // Відправка
    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Дякуємо! Ваше повідомлення успішно надіслано.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Помилка відправки: ' . $mail->ErrorInfo
    ]);
}
