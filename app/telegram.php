<?php

/* https://api.telegram.org/bot609568945:AAFpY_DLSqHu91tl8k3ivRKsrb9n9uL4Hjw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$cloud = $_POST['cloud'];
$token = "1193299096:AAF51qek8NqxZZrjoGBySuAHEKZbXD4YjMA";
$chat_id = "-377173367";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Ссылка на снимки' => $cloud,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
