// executa só após todo documento for carregado
document.addEventListener('DOMContentLoaded', () =>{

    document.querySelector("h2").innerText = "Jogador 〇 Começa"
    let pecas = document.querySelectorAll(".peca");

    pecas.forEach((peca) => {

        peca.addEventListener('click', click);

    })
})

//pega a posição dos clicks para adicionar no array tabuleiro da função atualizaPecas
function click(event){
    let peca = event.target;
    let posicao = peca.id;

    if(move(posicao)){
        setTimeout(() => {
            if(jogadorVez == 0){
                document.querySelector("h2").innerText = "Jogador 〇 Ganhou"
            } else {
                document.querySelector("h2").innerText = "Jogador 〤 Ganhou"
            }
        }, 10)
    }

    atualizaPecas(posicao);
}

//adiciona ao array a posicão dos símbolos
function atualizaPecas(posicao){
    let peca = document.getElementById(posicao.toString());
    let simbolo = tabuleiro[posicao];
    peca.innerHTML = `<div class='${simbolo}'></div>`

}

