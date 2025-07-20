<?php
// Configuração do e-mail de destino
$to = 'valder.panta1@gmail.com';
$subject = 'Nova mensagem do site VerdeMaiz Agro';

// Coleta dos dados do formulário
$name = $_POST['name'] ?? '';
$company = $_POST['company'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$commodity = $_POST['commodity'] ?? '';
$message = $_POST['message'] ?? '';

// Monta o corpo do e-mail
$body = "Nome: $name\n";
$body .= "Empresa: $company\n";
$body .= "E-mail: $email\n";
$body .= "Telefone: $phone\n";
$body .= "Commodity de Interesse: $commodity\n";
$body .= "Mensagem: $message\n";

// Cabeçalhos do e-mail
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

// Envia o e-mail
if (mail($to, $subject, $body, $headers)) {
    // Redireciona para página de sucesso
    header('Location: obrigado.html');
    exit;
} else {
    // Redireciona para página de erro
    header('Location: erro.html');
    exit;
}
?>
