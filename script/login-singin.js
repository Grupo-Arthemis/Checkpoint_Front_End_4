// function alterarTela(paginaAtual){
//     if (paginaAtual == "login"){
//         document.querySelector(".card-login").setAttribute("style", "display: none;");
//         document.querySelector(".card-cadastro").setAttribute("style", "display: grid;");
//     } else{
//         document.querySelector(".card-cadastro").setAttribute("style", "display: none;");
//         document.querySelector(".card-login").setAttribute("style", "display: grid;");
//     }
// };

console.log("teste");

function alterarTela(paginaAtual) {
    const cardCadastro = document.querySelector(".card-cadastro");
    const cardLogin = document.querySelector(".card-login");
  
    if (paginaAtual === "cadastro") {
      cardCadastro.setAttribute("style", "clip-path: inset(0 0 0 100%);");
      cardLogin.setAttribute("style", "clip-path: inset(0 0 0 0);");
    } else if (paginaAtual === "login") {
        cardLogin.setAttribute("style", "clip-path: inset(0 100% 0 0);");
        cardCadastro.setAttribute("style", "clip-path: inset(0 0 0 0);");
    }
};
