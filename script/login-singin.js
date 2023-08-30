const cadastro = document.querySelector('#telaCadastro'); 
const login = document.querySelector('#telaLogin'); 

const cardCadastro = document.querySelector(".card-cadastro");
const cardLogin = document.querySelector(".card-login");

function mudarTelaCadastro(){
  cardLogin.classList.remove('animar-E-D'); // remove animar-E-D class
  cardCadastro.classList.add('animar-D-E'); // add animar-D-E class
}

function mudarTelaLogin(){
  cardLogin.classList.remove('animar-D-E'); // remove animar-E-D class
  cardLogin.classList.add('animar-D-E'); // add animar-D-E class
  cardCadastro.classList.add('animar-D-E'); // add animar-D-E class
}

cadastro.addEventListener('click', mudarTelaCadastro); 
login.addEventListener('click', mudarTelaLogin); 