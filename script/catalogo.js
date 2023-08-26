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

function addProdutosAuto(quantidade){
  var catLinha = document.querySelector('.produtos-destaque-carrossel');

  for (var i = 0; i < quantidade; i++) {
      console.log(quantidade)
      var novoProduto =
                        "<div class='destaque-card svg-container'>"  +
                        "<div>" +
                        "<img src='../assets/foto-vinho.png' alt='' class='destaque-card-imagem'>" +
                        "</div>" +
                        "<div class='card-info'>" +
                        "<div>" +
                        "<h2 class='nomeVinhoDestaque'>DOMINI VENETI PINOT GRIGIO</h2>" +
                        "<p class='anoVinhoDestaque'>2023</p>" +
                        "</div>" +
                        "<h3 class='precoVinhoDestaque'>R$ 199,99</h3>" +
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

addProdutosAuto(2);


let botao = document.querySelectorAll('.circulo');
console.log(botao);


botao.forEach((botao) => {
  botao.addEventListener('click', () => {
    (addAoCarrinho(botao))})});

let sacola = document.querySelector('#quantItensSacola');

function addAoCarrinho(botao) {
    let div = botao.parentNode;
    console.log(div)
      div.innerHTML = "<p class='subtrair'>-</p>" +
                      "<div class='circulop'><p class='addCarrinho'>1</p></div>" +
                      "<p class='somar'>+</p>";
      console.log('Botão clicado')
      sacola.innerHTML = parseInt(sacola.innerHTML) + 1;

      let sum = div.querySelector('.somar');
      console.log(sum)
      sum.addEventListener('click', () => {
        const quantidade = div.querySelector('.addCarrinho');
        if (quantidade.innerHTML <=0){
          div.innerHTML =
            "<div class='circulo'>" +
            "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'> " +
            "</div>";
            sacola.innerHTML = 0

            let newCirculo = div.querySelector('.circulo');
            newCirculo.addEventListener('click', () => {
            (addAoCarrinho(newCirculo))})
        }else{
        console.log('adicionando')
        console.log(quantidade.innerHTML)
        quantidade.innerHTML = parseInt(quantidade.innerHTML) + 1
        sacola.innerHTML = parseInt(sacola.innerHTML) + 1}});
        
        let sub = div.querySelector('.subtrair');
        console.log(sub)
        sub.addEventListener('click', () => {
          console.log('subitraindo')
          const quantidade = div.querySelector('.addCarrinho');
          console.log(quantidade.innerHTML)
          quantidade.innerHTML = parseInt(quantidade.innerHTML) - 1
          sacola.innerHTML = parseInt(sacola.innerHTML) - 1
          if (quantidade.innerHTML <= 0){
            div.innerHTML =
            "<div class='circulo'>" +
            "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'> " +
            "</div>";
            sacola.innerHTML = 0

            let newCirculo = div.querySelector('.circulo');
            newCirculo.addEventListener('click', () => {
            (addAoCarrinho(newCirculo))})}})
};

function calch(px){
  var valor = (px*100)/1080;
  return valor;
}

function calcw(px){
  var valor = (px*100)/1920;
  return valor;
} 
