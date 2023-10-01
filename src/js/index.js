const botoes = document.querySelectorAll("botao");

const personagens = document.querySelectorAll("personagem");

botoes.array.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector("botao Selecionado");
        botaoSelecionado.classiList.remove("Selecionado");    
        
        botao.classiList.add("Selecionado");

        const personagemSelecionado = document.querySelector("personagem Selecionado");
        personagemSelecionado.classiList.remove("Selecionado");

        personagens[indice].classiList.add("Selecionado");
    });
});
