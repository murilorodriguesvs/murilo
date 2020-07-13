<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);

    $to = "murilo2759@gmail.com";
    $subject = "Contato - Portifólio";
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email. "\r\n". 
            "Telefone: ".$telefone. "\r\n".
            "Mensagem: ".$mensagem;
    $header = "From: historiesnutshell@gmail.com"."\r\n".
                "Reply-to:".$email."\r\n".
                "X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        
        echo("Mensagem enviada!");

    }else{
        echo("A mensagem não pôde ser enviada! Por favor, tente novamente");
    }            

}

?>