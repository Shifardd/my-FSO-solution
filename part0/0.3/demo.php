<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    echo "<b>Name:</b> $name <br>";
    echo "<b>Email:</b> $email <br>";
    echo "<b>Message: </b><br>$message";
  }
?>