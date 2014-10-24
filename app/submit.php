<?php

$method = $_SERVER['REQUEST_METHOD'];

if( strtolower( $method ) == 'post' ){

    $course      = trim($_POST['course'],'"');
    $firstName   = trim($_POST['firstName'],'"');
    $lastName    = trim($_POST['lastName'],'"');
    $email       = trim($_POST['email'],'"');
    $pts         = trim($_POST['pts'],'"');
    $hasPassed   = trim($_POST['hasPassed'],'"');

    $to = "nicktaras@hotmail.co.uk";
    $subject = "HTML email";

    $message = "
        <html>
        <head>
        <title>Quiz</title>
        </head>
        <body>
        <p>" . $course . "</p>
        <table>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Pts</th>
        <th>Passed</th>
        </tr>
        <tr>
        <td>" . $firstName . "</td>
        <td>" . $lastName . "</td>
        <td>" . $email . "</td>
        <td>" . $pts . "</td>
        <td>" . $hasPassed . "</td>
        </tr>
        </table>
        </body>
        </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $headers .= 'From: <webmaster@example.com>' . "\r\n";
    $headers .= 'Cc: myboss@example.com' . "\r\n";

    mail($to,$subject,$message,$headers);

}

?>
