<?php

{



 //$mail="levakiril@yandex.ru, urban_stroy@mail.ru";  e-mail куда уйдет письмо

  $mail="repvol2015@gmail.com";

  $title="Заявка с сайта с сайта ".$_SERVER["SERVER_NAME"]; // заголовок(тема) письма

  $phone = $_POST['user_phone'];
  $type = $_POST['type'];

  $color = $_POST['color']; 

  $square = $_POST['square'];

  $social = $_POST['social']; 


  $mess="<b>Пользователь прошел тест, его телефон </b> $phone<br>";  

  $mess.="<b>Ему (ей) нужно мощение площадью:</b> $square<br>";

  $mess.="<b>Тип брусчатки:</b> $type<br>";

  $mess.="<b>Цвет:</b> $color<br>";

  $mess.="<b>Удобный вид связи:</b> $social<br>";  

  $headers="MIME-Version: 1.0\r\n";

  $headers.="Content-type: text/html; charset=utf-8\r\n"; //кодировка

  $headers.="From: admin@".$_SERVER["SERVER_NAME"]; // откуда письмо (необязательнакя строка)

  mail($mail, $title, $mess, $headers); // отправляем



  // выводим уведомление и перезагружаем страничку

print"

<script language='Javascript' type='text/javascript'>

<!--



function reload()

{location = \"/thanks.html\"}; 

setTimeout('reload()',0);

-->

</script>";

}

?>