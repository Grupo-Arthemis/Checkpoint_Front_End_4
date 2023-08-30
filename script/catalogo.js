// Limpar local storage quando ini9ciar a pagina (tem que fazer funcao para ver se esta cadastrado ou se ja tinha coisa)
localStorage.clear();

let vinhos; 

function carregarDadosVinhos() {
  fetch('../script/vinhos.json') 
      .then(response => response.json())
      .then(data => {
          vinhos = data; 

          addProdDestAuto(2, vinhos);
          addProdGaleAuto(8, vinhos);

          let botao = document.querySelectorAll('.circulo');
          botao.forEach((botao) => {
            botao.addEventListener('click', () => {
              (addAoCarrinho(botao))})});

      })
      .catch(error => {
          console.error('Erro ao carregar os dados:', error);
      });
}

carregarDadosVinhos();

// Função para carregar um arquivo SVG e alterar as cores

async function alterarCoresBloob(cor1,cor2) {

    try {
      const response_1 = await fetch('../assets/bloob.svg');
      const svgContent_1 = await response_1.text();

      const response_2 = await fetch('../assets/bloob-horizontal.svg');
      const svgContent_2 = await response_2.text();

      const svgContainer_1 = document.querySelectorAll('.destaque-card.svg-container');
      alterar(svgContainer_1,svgContent_1);

      const svgContainer_2 = document.querySelectorAll(".destaque-card-grid.svg-container");
      alterar(svgContainer_2,svgContent_2);

      function alterar(svg,svgContent) {

        svg.forEach((svg) => {
          let corUm = cor1;
          let corDois = cor2;
  
          if (corUm == "randon"){
            corUm = "#"+Math.floor(Math.random()*16777215).toString(16);
          }
          if (corDois == "randon"){
            corDois = "#"+Math.floor(Math.random()*16777215).toString(16);
          }
          const svgModificado = svgContent.replace(/#3790F8/g, `${corUm}`).replace(/#FBA81F/g, `${corDois}`);
          svg.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgModificado)}")`;
        });
      }
      
    } catch (error) {
      console.error('Erro ao carregar e modificar o SVG:', error);
    }
};

function addProdDestAuto(quantidade, vinhos){
  var catLinha = document.querySelector('.produtos-destaque-carrossel');
  for (var i = 0; i < quantidade; i++) {
      var novoProduto =
                        "<div class='destaque-card svg-container'>"  +
                        "<div>" +
                        "<img src='../assets/foto-vinho.png' alt='' class='destaque-card-imagem'>" +
                        "</div>" +
                        "<div class='card-info'>" +
                        "<div>" +
                        "<h2 class='nomeVinhoDestaque'>" + vinhos[i].nome.toUpperCase() + "</h2>" +
                        "<p class='anoVinhoDestaque'>" + vinhos[i].ano + "</p>" +
                        "</div>" +
                        "<h3 class='precoVinhoDestaque'>R$ "+ vinhos[i].preco + "</h3>" +
                        "</div>" +
                        "<div class='card-carrinho'>" +
                        "<div class='circulo'>" +
                        "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
      catLinha.innerHTML += novoProduto;
  }
};

function addProdGaleAuto(quantidade){
  var grid = document.querySelector('.grid-produtos');
  for (var i = 0; i < quantidade; i++) {
    addProdGale(vinhos[i].nome.toUpperCase(),vinhos[i].preco,vinhos[i].ano,true);
}};

function addProdGale(nome,preco,ano,auto){
      var grid = document.querySelector('.grid-produtos');
      var novoProduto = 
                        "<div class='destaque-card-grid svg-container'>" +
                        "<div>" +
                        "<img src='../assets/foto-vinho.png' alt='' class='destaque-card-imagem-grid'>" +
                        "</div>" +
                        "<div class='card-info-grid'>" +
                        "<div>" +
                        "<p class='anoVinhoDestaque'>" + ano + "</p>" +
                        "</div>" +
                        "<div class='bottom-info-grid'>" +
                        "<div>" +
                        "<div>" +
                        "<h2 class='nomeVinhoDestaque'>" + nome + "</h2>" +
                        "<div class='grid-separation'></div>" +
                        "</div>" +
                        "<h3 class='precoVinhoDestaque'>R$ "+ preco + "</h3>" +
                        "</div>" +
                        "<div class='card-carrinho'>" +
                        "<div class='circulo'>" +
                        "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
      grid.innerHTML += novoProduto;
      if (auto != true){
        let botao = document.querySelectorAll('.circulo');
        botao.forEach((botao) => {
          botao.addEventListener('click', () => {
            (addAoCarrinho(botao))})});        
      }
};


function addAoCarrinho(botao){
  let sacola = document.querySelector('#quantItensSacola');
  let div = botao.parentNode;
  div.innerHTML = "<p class='subtrair'>-</p>" +
                  "<div class='circulop'><p class='addCarrinho'>0</p></div>" +
                  "<p class='somar'>+</p>";
  ;
  
  // pegando as informacoes do vinho
  const cardInfoDiv = div.previousElementSibling;
  const nomeVinho = cardInfoDiv.querySelector('.nomeVinhoDestaque, .nomeVinhoDestaque-grid').textContent;
  const precoVinho = cardInfoDiv.querySelector('.precoVinhoDestaque, .precoVinhoDestaque-grid').textContent;
  
  const vinho = {
    nome: nomeVinho,
    preco: precoVinho,
    quantidade: 1
  };
  
  //adicionando local storage
  var listaVinhos = JSON.parse(localStorage.getItem("listaVinhos")) || [];
  
  
  let sum = div.querySelector('.somar');
  sum.addEventListener('click', function() {
    const quantidadeSac = div.querySelector('.addCarrinho');
    const vinhoExistente = listaVinhos.find(item => item.nome === nomeVinho);
    //verifica se tem no local storage
    
    if (vinhoExistente) {
      vinhoExistente.quantidade++;
      quantidadeSac.textContent = vinhoExistente.quantidade;
    } else {
      listaVinhos.push(vinho); 
      quantidadeSac.textContent = 1;
    }
    
    localStorage.setItem('listaVinhos', JSON.stringify(listaVinhos));
  
    //sacola ter a quantidade de itens pedidas
    const totalQuantidade = listaVinhos.reduce((total, item) => total + item.quantidade, 0);
    sacola.innerHTML = totalQuantidade;
    
    console.log(`Vinho Adicionado! Nome: ${nomeVinho}`);
    console.log(`Vinho Adicionado! Nome: ${precoVinho}`);
    console.log(listaVinhos) 
  });
  //Logica para subtrair
  let sub = div.querySelector('.subtrair');
  sub.addEventListener('click', function() {
    const quantidadeSac = div.querySelector('.addCarrinho');
    const vinhoExistente = listaVinhos.find(item => item.nome === nomeVinho);

    if (vinhoExistente && vinhoExistente.quantidade > 0) {
      vinhoExistente.quantidade--;
      quantidadeSac.textContent = vinhoExistente.quantidade;
    }
    if (vinhoExistente && vinhoExistente.quantidade == 0){
      div.innerHTML =
            "<div class='circulo'>" +
            "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'> " +
            "</div>";
      ;
      sacola.innerHTML = 0

      let newCirculo = div.querySelector('.circulo');
      newCirculo.addEventListener('click', () => {
      (addAoCarrinho(newCirculo))})

    }
    localStorage.setItem('listaVinhos', JSON.stringify(listaVinhos));

    const totalQuantidade = listaVinhos.reduce((total, item) => total + item.quantidade, 0);
    sacola.innerHTML = totalQuantidade;

    console.log(`Vinho Removido! Nome: ${nomeVinho}`);
    console.log(`Vinho Removido! Nome: ${precoVinho}`);
    console.log(listaVinhos) 
  });
}

// function addAoCarrinho(botao) {

//     let sacola = document.querySelector('#quantItensSacola');
//     let div = botao.parentNode;
//     if (div.parentElement.parentElement.className == "destaque-card svg-container"){
//       console.log(div.parentElement.querySelector(".nomeVinhoDestaque").innerHTML);
//       console.log(div.parentElement.querySelector(".precoVinhoDestaque").innerHTML);
//       console.log(div.parentElement.querySelector(".anoVinhoDestaque").innerHTML);
//     }else{
//       console.log(div.parentElement.parentElement.querySelector(".precoVinhoDestaque").innerHTML);
//       console.log(div.parentElement.parentElement.querySelector(".anoVinhoDestaque").innerHTML);
//       console.log(div.parentElement.parentElement.querySelector(".nomeVinhoDestaque").innerHTML);
//     }
//       div.innerHTML = "<p class='subtrair'>-</p>" +
//                       "<div class='circulop'><p class='addCarrinho'>1</p></div>" +
//                       "<p class='somar'>+</p>";

//       sacola.innerHTML = parseInt(sacola.innerHTML) + 1;

//       let sum = div.querySelector('.somar');

//       sum.addEventListener('click', () => {
//         const quantidade = div.querySelector('.addCarrinho');
//         if (quantidade.innerHTML <=0){
//           div.innerHTML =
//             "<div class='circulo'>" +
//             "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'> " +
//             "</div>";
//             sacola.innerHTML = 0

//             let newCirculo = div.querySelector('.circulo');
//             newCirculo.addEventListener('click', () => {
//             (addAoCarrinho(newCirculo))})
//         }else{
//         quantidade.innerHTML = parseInt(quantidade.innerHTML) + 1
//         sacola.innerHTML = parseInt(sacola.innerHTML) + 1}});
        
//         let sub = div.querySelector('.subtrair');
//         sub.addEventListener('click', () => {
//           const quantidade = div.querySelector('.addCarrinho');
//           quantidade.innerHTML = parseInt(quantidade.innerHTML) - 1
//           sacola.innerHTML = parseInt(sacola.innerHTML) - 1
//           div
//           if (quantidade.innerHTML <= 0){
//             div.innerHTML =
//             "<div class='circulo'>" +
//             "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'> " +
//             "</div>";
//             sacola.innerHTML = 0

//             let newCirculo = div.querySelector('.circulo');
//             newCirculo.addEventListener('click', () => {
//             (addAoCarrinho(newCirculo))})}})
// };

alterarCoresBloob("randon","randon");

