function validar(){
    var nome= cadastro.nome.value;
    var cpf = cadastro.cpf.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var confirma = cadastro.confirma.value;

    if(nome==""){
        alert("O nome campo é obrigatório");
        cadastro.nome.focus();
        return false; //return false é para o formulario não ser enviado sem a informação que foi solicitada. 
    }
    if(cpf==""){
        alert("CPF é campo de preenchimento obrigatório!");
        cadstro.cpf.focus();
        return false;
    }
    if(cpf.length != 14){
        alert("CPF inválido");
        cadastro.cpf.focus();
        return false;
    }
    if (email==""){
        alert("Campo E-mail é de preenchimento obrigatório");
        cadastro.email.focus();
        return false;
    }
    if(senha==""){
        alert("Senha é campo de preenchimento obrigatório!");
        cadastro.senha.focus();
        return false;
    }
    if(senha.length < 6 || senha.length>10){
        alert("A senha deve ter no mínimo 6 e no máximo 10 números!");
        cadastro.senha.focus();
        return false;
    }
    if(isNaN(senha)){ //isNAN = is not a number
        alert("A senha deve conter apenas números");
        cadastro.senha.focus();
        return false;
    }
    if(confirma==""){
        alert("é obrigatório confirmar a senha!");
        cadastro.senha.focus();
        return false;
    }
    if(confirma!=senha){
        alert("Senhas não conferem!");
        cadastro.cofirma.focus();
        return false;
    }

}