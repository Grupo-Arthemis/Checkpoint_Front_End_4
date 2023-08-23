// Função para carregar um arquivo SVG e alterar as cores
async function alterarCoresBloob(cor1,cor2) {
    let corUm = cor1;
    let corDois = cor2;
    try {
      // Carregar o arquivo SVG usando fetch
      const response = await fetch('../assets/bloob.svg');
      const svgContent = await response.text();
  
      // Modificar as cores no SVG
      const svgModificado = svgContent.replace(/#3790F8/g, `${corUm}`).replace(/#FBA81F/g, `${corDois}`);
  
      // Definir o SVG modificado como plano de fundo
      const svgContainer = document.getElementById('svg-container');
      svgContainer.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgModificado)}")`;
    } catch (error) {
      console.error('Erro ao carregar e modificar o SVG:', error);
    }
  }

  let botaoCarrinhoCard = document.getElementById('addCarrinho');
  botaoCarrinhoCard.addEventListener("click", () => {
        console.log("teste");
        botaoCarrinhoCard.value = "Adicionado";

        let novoTitulo = document.createElement('p');
        novoTitulo.textContent = "Adicionado";
        botaoCarrinhoCard.replaceWith(novoTitulo);

    });