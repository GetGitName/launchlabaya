<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $website = strip_tags($_POST['website']);
    $message = strip_tags($_POST['message']);

    $to = "hello@labaya.studio";

    $subject = "New Contact Form Submission";

    $body = "
    Name: $name

    Email: $email

    Website: $website

    Message:
    $message
    ";

    $headers = "From: noreply@labaya.studio\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $body, $headers)){

        echo "Message sent successfully.";

    } else {

        echo "Failed to send message.";

    }

}

?>