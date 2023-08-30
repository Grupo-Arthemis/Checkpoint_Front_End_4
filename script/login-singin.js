"use strict";

const cadastro = document.querySelector('#telaCadastro'); 
const login = document.querySelector('#telaLogin'); 

const cardCadastro = document.querySelector(".card-cadastro");
const cardLogin = document.querySelector(".card-login");

cadastro.addEventListener('click', mudarTelaCadastro); 
login.addEventListener('click', mudarTelaLogin); 

function mudarTelaCadastro(){
  if (window.innerWidth < 700){
    if(cardLogin.classList.contains('animar-B-T')){
      cardLogin.classList.remove('animar-B-T'); 
    }
    cardLogin.classList.toggle('animar-T-B');
  }else{
    if(cardLogin.classList.contains('animar-E-D')){
      cardLogin.classList.remove('animar-E-D'); 
    }
    cardLogin.classList.toggle('animar-D-E');
  }
};

function mudarTelaLogin(){
  if(window.innerWidth < 700){
    if(cardLogin.classList.contains('animar-T-B')){
      cardLogin.classList.remove('animar-T-B'); 
    }
    cardLogin.classList.toggle('animar-B-T'); 
  }else{
    if(cardLogin.classList.contains('animar-D-E')){
      cardLogin.classList.remove('animar-D-E'); 
    }
    cardLogin.classList.toggle('animar-E-D'); 
  }
};

// cadastro de usuário -------------------------------------------------------------------------------------------------------

//Verificando se a lista de usuários existe no localStorage
var listaUser = JSON.parse(localStorage.getItem("listaUser"));
if (listaUser == null) {
    console.log("Lista de usuários não encontrada, criando lista...");
    let listaDeUsuarios = [
        {
            nomeUsuario : "Admin",
            sobrenomeUsuario : "Admin",
            emailUsuario : "Admin",
            senhaUsuario: "123456",            
        },
    ];
    localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
    var listaUser = JSON.parse(localStorage.getItem("listaUser"));
};

var nome = document.getElementById("Nome");
var email = document.getElementById("Email");
var sobrenome = document.getElementById("Sobrenome");
var senha = document.getElementById("Senha");
var confirma = document.getElementById("Senha_Confirm");

// funcao para limpar os campos depois de cadastrar
function limparCampos() {
    nome.value = '';
    email.value = '';
    sobrenome.value = '';
    senha.value = '';
    confirma.value = '';
};

// Ver e desver a senha
const SenhaIcon = document.querySelector("#SenhaIcon");
const SenhaConfirmaIcon = document.querySelector("#SenhaConfirmaIcon");

SenhaIcon.addEventListener("click", ()=>{
    SenhaIcon.classList.toggle("fa-lock");
    SenhaIcon.classList.toggle("fa-lock-open");
    if (SenhaIcon.classList.contains("fa-lock-open")){
        senha.setAttribute("type","text");
    }else{
        senha.setAttribute("type","password");
    }

});

SenhaConfirmaIcon.addEventListener("click", ()=>{
    SenhaConfirmaIcon.classList.toggle("fa-lock");
    SenhaConfirmaIcon.classList.toggle("fa-lock-open");

    if (SenhaConfirmaIcon.classList.contains("fa-lock-open")){
        confirma.setAttribute("type","text");
    }else{
        confirma.setAttribute("type","password");
    }

});


// verificar se os campos estao vazios, ver se o email é realmente um email, ver se o nome, e email tem mais de 5 digitos
// ver se a senha tem entre 6 e 8 digitos, verificar se a senha esta igual na confirmacao
// e por ultimo limpar os campos se tudo for feito corretamente
var emailRegExp = /\S+@\S+\.\S{3,}/;

function validarFormulario() {
    
    // Verificando se os campos estão preenchidos e corretos
    if (nome.value === "" | sobrenome.value ==="" | email.value === "" || senha.value === "" || confirma.value === "") {
        alert("Por favor, preencha todos os campos (nome, Telefone, email, senha e confirmação).");
        return false;
    } else if (!emailRegExp.test(email.value)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else if (nome.value.length < 2 || nome.value.length > 30) {
        alert("O campo nome não atingiu o número mínimo de caracteres.");
        return false;
    } else if (sobrenome.value.length < 2 || sobrenome.value.length > 30) {
        alert("O campo nome não atingiu o número mínimo de caracteres.");
        return false;
    } else if (senha.value.length < 6 || senha.value.length > 8) {
        alert("A senha deve ter no minimo 6 digitos e no maximo 8 digitos.")   
        return false;
    } else if (senha.value !== confirma.value) {
        alert("A senha e a confirmação devem ser iguais.");
        return false;
    } else {
        return true;
    }
};
// Verifica se o nome atende aos requisitos----------------------
nome.addEventListener("focus", ()=>{
    if (nome.value.length < 2){
        nome.setAttribute("style","outline-color:#b64646;")}
});

nome.addEventListener("keyup", ()=>{
    if(nome.value.length < 2 || nome.value.length > 50){
        nome.setAttribute("style","outline-color:#b64646;")
        
    }else{
        nome.setAttribute("style","outline-color:#40933e;")
    }
});
// ---------------------------------------------------------------

// Verifica se o sobrenome atende aos requisitos----------------------
sobrenome.addEventListener("focus", ()=>{
    if (sobrenome.value.length < 2){
        sobrenome.setAttribute("style","outline-color:#b64646;")}
});

sobrenome.addEventListener("keyup", ()=>{
    if(sobrenome.value.length < 2 || nome.value.length > 50){
        sobrenome.setAttribute("style","outline-color:#b64646;")
        
    }else{
        sobrenome.setAttribute("style","outline-color:#40933e;")
    }
});
// ---------------------------------------------------------------

// Verifica se o email atende aos requisitos----------------------

email.addEventListener("focus", ()=>{
    if (email.value.length < 5){
        email.setAttribute("style","outline-color:#b64646;")}
});

email.addEventListener("keyup", ()=>{
    if((email.value.length < 5)||(!emailRegExp.test(email.value))) {
        email.setAttribute("style","outline-color:#b64646;")
        
    }else{
        email.setAttribute("style","outline-color:#40933e;")
    }
});
// ---------------------------------------------------------------

// Verifica se o senha atende aos requisitos----------------------

senha.addEventListener("focus", ()=>{
    if (senha.value.length < 5){
        senha.setAttribute("style","outline-color:#b64646;")}
});

senha.addEventListener("keyup", ()=>{
    if((senha.value.length < 6)||(senha.value.length > 8)) {
        senha.setAttribute("style","outline-color:#b64646;")

    }else{
        senha.setAttribute("style","outline-color:#40933e;")
    }
    
});
// ---------------------------------------------------------------
// Verifica se o senha foi confirmada-----------------------------

confirma.addEventListener("focus", ()=>{
    if((confirma.value != senha.value)||(confirma.value.length < 6)){
        confirma.setAttribute("style","outline-color:#b64646;")}
});

confirma.addEventListener("keyup", ()=>{
    if((confirma.value != senha.value)) {
        confirma.setAttribute("style","outline-color:#b64646;")

    }else{
        confirma.setAttribute("style","outline-color:#40933e;")
    }
    
});
// ---------------------------------------------------------------


//clique do botao onde faz a verificação, pergunta se deseja salvar e limpa os campos
const msgErrorCadastroCadastro = document.querySelector("#avisoCadastro");
document.getElementById("BotaoCadastro").addEventListener("click", function(event) {
    
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = confirm("Está certo das suas informações?");
        if (confirmacao) {
            console.log("Nome: "           + nome.value);
            console.log("Sobrenome: "      + sobrenome.value);
            console.log("Email: "          + email.value);
            console.log("Senha: "          + senha.value);
            console.log("-----------------------");

            var listaUser = JSON.parse(localStorage.getItem("listaUser"));
            newUser = {
                nomeUsuario : nome.value,
                sobrenomeUsuario : sobrenome.value,
                emailUsuario : email.value,
                senhaUsuario : senha.value,
            };

            try{
                listaUser.forEach((usuario) => {
                    console.log(usuario.emailUsuario);
                    console.log(usuario.emailUsuario, newUser.emailUsuario);
                    if (usuario.emailUsuario == newUser.emailUsuario) {
                        msgErrorCadastro.innerHTML = "<strong>Esse email já existe</strong>";
                        msgErrorCadastro.setAttribute("style","color:#b64646;");
                        console.log("Esse email já existe");
                        throw "Esse email já existe!!!";
                    }
                }),   
                console.log("Novo usuario!!!");
                throw "Novo usuario!!!";
                

            }catch(error){
                if (error == "Novo usuario!!!"){
                    listaUser.push(newUser);
                    console.log(listaUser);
                    localStorage.setItem("listaUser", JSON.stringify(listaUser));
                    
                    msgErrorCadastro.innerHTML = "<strong>Usuário Cadastrado!</strong>"
                    msgErrorCadastro.setAttribute("style","color:#40933e;")

                    setTimeout(function () {
                      mudarTelaCadastro()
                      msgErrorCadastro.innerHTML = "Use seu e-mail para cadastrar-se"
                      msgErrorCadastro.setAttribute("style","color:#444444;")
                    }, 3000 );
                }
            }
        } 
    }
});

// login de usuário -------------------------------------------------------------------------------------------------------

const botao = document.querySelector("#BotaoLogin");

botao.addEventListener("click", () => {
    let listaUser = JSON.parse(localStorage.getItem("listaUser"));
    const msgErrorLogin = document.querySelector("#avisoLogin");

    let usuarioValidado = {
        emailInput: document.querySelector("#EmailInput").value,
        senhaInput: document.querySelector("#SenhaInput").value,
    }

    try {
      listaUser.forEach((usuario) => 
      {
        if (usuarioValidado.emailInput == usuario.emailUsuario && 
            usuarioValidado.senhaInput == usuario.senhaUsuario) 
            {
              usuarioValidado["nome"] = usuario.nomeUsuario;
              usuarioValidado["sobrenome"] = usuario.sobrenomeUsuario;
              throw "VALIDADO!";
            }
      });
        throw "Usuário ou senha inválidos!";

    } catch (msg) {
      if (msg == "VALIDADO!") {
          localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado));
          msgErrorLogin.innerHTML = "<strong>Usuário validado</strong>"
          msgErrorLogin.setAttribute("style","color:#40933e;")
          setTimeout(function() {
            window.location.href = "../pages/home.html";
          }, 3000);
      }else{
          msgErrorLogin.innerHTML = "<strong>Login inválido</strong>";
          msgErrorLogin.setAttribute("style","color:#b64646;");
          }
    }
});

const SenhaIconLogin = document.querySelector("#SenhaIconLogin");
SenhaIconLogin.addEventListener("click", ()=>{
  SenhaIconLogin.classList.toggle("fa-lock");
  SenhaIconLogin.classList.toggle("fa-lock-open");

  if (SenhaIconLogin.classList.contains("fa-lock-open")){
      document.querySelector("#SenhaInput").setAttribute("type","text");
  }else{
      document.querySelector("#SenhaInput").setAttribute("type","password");
  }

});

