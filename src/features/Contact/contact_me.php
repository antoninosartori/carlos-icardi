<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check for empty fields
    if (
        empty($_POST['name']) ||
        empty($_POST['mail']) ||
				empty($_POST['subject']) ||
        empty($_POST['message']) ||
        !filter_var($_POST['formEmail'], FILTER_VALIDATE_EMAIL)
    ) {
        echo "No arguments Provided!";
        return false;
    }

    $formName = strip_tags(htmlspecialchars($_POST['name']));
    $email_address = strip_tags(htmlspecialchars($_POST['email']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    // Create the email and send the message
    $to = 'lonardibautista@gmail.com';
    $email_subject = "Contacto de: $formName - $subject";
    $email_body = "Contacto recibido desde la web.\n\n" . "Detalles:\n\nNombre: $formName\n\nEmail: $email_address\n\nAsunto: $subject\n\nMensaje:\n$message";

    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');

    $mailFrom = 'lonardibautista@gmail.com';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: $mailFrom" . "\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Email sent successfully
        header("Location: confirmacion.html");
        exit();
    } else {
        // Failed to send email
        echo "Error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.";
        // Puedes agregar más detalles de error aquí para depuración.
    }
} else {
    // Si el formulario no se envió correctamente, redirigir a la página de contacto
    header("Location: contacto.html");
    exit();
}
?>
