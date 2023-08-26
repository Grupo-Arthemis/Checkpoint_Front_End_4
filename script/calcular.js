// get all styles components from the page


// Adicionar um ouvinte de evento de redimensionamento à janela
const stylesheet = document.styleSheets[0];
if (window.innerWidth < 700){
    x = 2.3
}
else{
    x = 1
}
adaptar(x)
window.addEventListener('resize',()=>{
    if (window.innerWidth < 700){
        x = 2.3
    }
    else{
        x = 1
    }
    adaptar(x)
});

// Chamar a função inicialmente para exibir a largura atual






function adaptar (x){
    for(let i = 9; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].cssText.includes( "min(")) {
            var matches = stylesheet.cssRules[i].cssText.match(/min\([^)]*\)/g);
            antes = stylesheet.cssRules[i].cssText
            memoria = ""
            for (let j = 0; j < matches.length; j++){
                if (j != 0){
                    antes = memoria
                }
                depois = antes.replace(matches[j] , matches[j].replace(((matches[j].split(", "))[1]).slice(0, -3), (calcularProporcao(((matches[j].split(", "))[0]).slice(4)))))
                memoria = depois
    
            }
            stylesheet.cssRules[i].cssText = memoria
    
            stylesheet.deleteRule(i)
            stylesheet.insertRule(memoria, i)
        }
    }
function calcularProporcao(tamanhoPX){
        tamanhoVW = ((parseFloat(tamanhoPX) * 100) / 1920) * x;
        return tamanhoVW;
}
}


