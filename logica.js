let tabuleiro = ["","","","","","","","",""];
let jogadorVez = 0;
let simbolo = ["o", "x"];
let fimJogo = false;
let estadosVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*verifica se alguém ganhou, se sim impede de adiciona mais simbolos, também
adiciona os símbolos aos campos e determina o próximo jogador */
function move(posicao){

    if(fimJogo){
        return;
    }

    if(tabuleiro[posicao] == ''){
        tabuleiro[posicao] = simbolo[jogadorVez];

        fimJogo = vencedor();

        if(fimJogo == false){
            if(jogadorVez == 1){
                jogadorVez = 0
                document.querySelector("h2").innerText = "Vez do Jogador 〇"
            } else {
                jogadorVez = 1
                document.querySelector("h2").innerText = "Vez do Jogador 〤"
            }
        }
    }

    return fimJogo;
}

/*retorna true para a váriavel fimJogo se alguém houver ganhado,
para saber se há hum vencedor ela verifica se há alguma sequência igual a variável estadosVitoria */
function vencedor(){
    for(let i = 0; i < estadosVitoria.length; i++){
        let seq = estadosVitoria[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1] == tabuleiro[pos2] &&
           tabuleiro[pos1] == tabuleiro[pos3] &&
           tabuleiro[pos1] != ''){

            return true;
        }
    }

    return false;
}

//reseta o jogo, limpa os campos e começa pelo primeiro jogador
function reset(){
    tabuleiro = ["","","","","","","","",""];
    jogadorVez = 0;
    fimJogo = false;
    document.querySelector("h2").innerText = ""
    let pecas = document.querySelectorAll(".peca");
    document.querySelector("h2").innerText = "Jogador 〇 Começa"

    pecas.forEach((peca) => {
        let posicao = peca.id;
        let simbolo = tabuleiro[posicao]

        if(simbolo == "x" || "0"){
            peca.innerHTML = ``
        }
        
    })
}
