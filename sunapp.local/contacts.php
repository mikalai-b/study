<?php

$recepient = "wolfnik@mail.ru";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \n E-mail: $mail \n Текст: $text";

$pagetitle = "Отзыв с сайта SunApp";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>