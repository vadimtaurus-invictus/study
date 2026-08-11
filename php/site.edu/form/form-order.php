<?php
session_start();
require_once __DIR__ . '/lib-form-file.php';

$error = '';
$success = false;

if (!empty($_POST)) {
    load($filds);
    $error = validate($filds);

    if (empty($error)) {
        addOrderInFile($filds);
        $success = true;
    }
}

// Генеруємо питання капчі ПОСЛЯ обробки POST-запиту
$captchaQuestion = setCaptcha();
?>

<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма замовлення</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <br><br>
    <form action="" method="POST" class="center form" name="main">
        <fieldset>
            <legend>Форма замовлення</legend>

            <?php if (!empty($_POST)): ?>
                <div class="info">
                    <?php if ($success): ?>
                        <h2>Замовлення прийнято!</h2>
                    <?php else: ?>
                        <ul><?php echo $error; ?></ul>
                        <?php autoWriteForm($filds); ?>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

            <table class="center">
                <tr>
                    <td>Товар</td>
                    <td>
                        <select name="commodity" class="w-200">
                            <option value="Клавіатура">Клавіатура</option>
                            <option value="Миша">Миша</option>
                            <option value="Монітор">Монітор</option>
                            <option value="Процесор">Процесор</option>
                            <option value="Відео karta">Відео карта</option>
                            <option value="Пам'ять">Пам'ять</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Кількість</td>
                    <td><input type="number" name="count" min="1" class="w-200"></td>
                </tr>
                <tr>
                    <td>Прізвище, ім'я</td>
                    <td><input type="text" name="name" class="w-200" autocomplete="off"></td>
                </tr>
                <tr>
                    <td>Телефон</td>
                    <td><input type="text" name="phone" class="w-200" autocomplete="off"></td>
                </tr>
                <tr>
                    <td>Адреса доставки</td>
                    <td>
                        <textarea name="address" rows="4" class="w-200" autocomplete="off"></textarea>
                    </td>
                </tr>
                <tr>
                    <td><?php echo $captchaQuestion; ?></td>
                    <td>
                        <input type="text" name="captcha" class="w-200" autocomplete="off">
                    </td>
                </tr>
            </table>
            <br>
            <button type="submit" class="submit">Замовити</button>
        </fieldset>
    </form>
</body>

</html>