<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First Form</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <form action="./demo.php" method="POST">
    <div class="name-input"><label for="name">Name:</label> <input type="text" name="name" id="name" required> <br></div>
    <div class="email-input"><label for="email">Email: </label><input type="email" name="email" id="email" required> <br></div>
    <div class="message-input"><label for="message">Message: </label><textarea name="message" id="message" draggable="false" rows="5" required></textarea> <br></div>
    <button type="submit">Send your message</button>
  </form>
</body>
</html>