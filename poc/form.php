<?php

    if(isset($_POST["message"])) {

        $message = "Ce message vous à été envoyé via le site : francklamy.com

        Nom et Prénom : " . $_POST["names"] . "
        Tel : " . $_POST["telephone"] . "
        Email : " . $_POST["email"] . "

        Date : " . $_POST["date"] . "
        Lieux : " . $_POST["lieux"] . "
        Type D' Evenement : " . $_POST["type"] . "
        Nombre de personnes : " . $_POST["nombre"] . "

        Message : " . $_POST["message"];

        $retour = mail("devs.testmail2022@gmail.com", "Nouvelle Demande De Contact", $message, "From:contact@francklamy.com" . "\r\n" . "Reply-to:" . $_POST["email"]);

    if ($retour) {

        echo "<p> L'email a été envoyé.</p>";

    }

    }

?>