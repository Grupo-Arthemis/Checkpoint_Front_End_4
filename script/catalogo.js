// Função para carregar um arquivo SVG e alterar as cores
async function alterarCoresBloob(cor1,cor2) {

    try {
      // Carregar o arquivo SVG usando fetch
      const response = await fetch('../assets/bloob.svg');
      const svgContent = await response.text();

      // Modificar as cores no SVG

      // Definir o SVG modificado como plano de fundo
      const svgContainer = document.querySelectorAll('.svg-container');
      console.log(svgContainer)
      svgContainer.forEach((svgContainer) => {
        let corUm = cor1;
        let corDois = cor2;

        if (corUm == "randon"){
          corUm = "#"+Math.floor(Math.random()*16777215).toString(16);
        }
        if (corDois == "randon"){
          corDois = "#"+Math.floor(Math.random()*16777215).toString(16);
        }
        const svgModificado = svgContent.replace(/#3790F8/g, `${corUm}`).replace(/#FBA81F/g, `${corDois}`);
        svgContainer.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgModificado)}")`;
      });
    } catch (error) {
      console.error('Erro ao carregar e modificar o SVG:', error);
    }
  };

function addProdutosAuto(quantidade){
  var catLinha = document.querySelector('.produtos-destaque-carrossel');

  for (var i = 0; i < quantidade; i++) {
      console.log(quantidade)
      var novoProduto =
                        "<div class='destaque-card' class='svg-container'>"  +
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
  let botao = document.querySelectorAll('.circulo');
  botao.forEach((botao) => {
  botao.addEventListener('click', () => {
  (myFunction(botao))})});
};

let botao = document.querySelectorAll('.circulo');
botao.forEach((botao) => {
  botao.addEventListener('click', () => {
    (myFunction(botao))})});

let sacola = document.querySelector('#quantItensSacola');

function myFunction(botao) {
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
        console.log('adicionando')
        const quantidade = div.querySelector('.addCarrinho');
        console.log(quantidade.innerHTML)
        quantidade.innerHTML = parseInt(quantidade.innerHTML) + 1
        sacola.innerHTML = parseInt(sacola.innerHTML) + 1});

        let sub = div.querySelector('.subtrair');
        console.log(sub)
        sub.addEventListener('click', () => {
          console.log('subitraindo')
          const quantidade = div.querySelector('.addCarrinho');
          console.log(quantidade.innerHTML)
          quantidade.innerHTML = parseInt(quantidade.innerHTML) - 1
          sacola.innerHTML = parseInt(sacola.innerHTML) - 1
          if (quantidade.innerHTML == 0){
            div.innerHTML =
            "<div class='circulo'>" +
            "<img src='../assets/carrinho.svg' alt='' class='addCarrinho'> " +
            "</div>";

            let newCirculo = div.querySelector('.circulo');
            newCirculo.addEventListener('click', () => {
            (myFunction(newCirculo))})}})
};

function calch(px){
  var valor = (px*100)/1080;
  return valor;
}

function calcw(px){
  var valor = (px*100)/1920;
  return valor;
}



