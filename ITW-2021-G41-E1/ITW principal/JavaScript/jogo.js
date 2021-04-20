"use strict";


let mapa = null;

let tamanhoMapa = null;

let posiçãoJogador = {
    linha: null,

    coluna: null
}

function mapa1 () {
    mapa = [
        ['Player1','','PK1','Tree',''],
        ['H20','H20','','',''],
        ['H20','','','Rock',''],
        ['Tree','','Rock','Rock','Tree'],
        ['','','','PK2','End']
    ]

    posiçãoJogador.linha = 0;
    posiçãoJogador.coluna = 0;

    tamanhoMapa = 5


    desenhaMapa();
}

function desenhaMapa (){
    for (let i = 0; i < tamanhoMapa; i++){
        for (let j = 0; j < tamanhoMapa; j++){
            if (mapa[i][j] === ''){
                console.log('0');
            }
            else if (mapa[i][j] === 'Player1'){
                console.log('P1');
            }
            else if (mapa[i][j] === 'Tree'){
                console.log('Tree');
            }
            else if (mapa[i][j] === 'Rock'){
                console.log('Rock');
            }
            else if (mapa[i][j] === 'H20'){
                console.log('H20');
            }
            else if (mapa[i][j] === 'End'){
                console.log('end');
            }
            else if (mapa[i][j] === 'PK1'){
                console.log('PK1');
            }
            else if (mapa[i][j] === 'PK2'){
                console.log('PK2');
            }
        }
    }
    console.log()
}

function luta(){

}




// ↓↓↓↓↓↓↓ movimentação do jogador (cima,baixo,esquerda,direita) ↓↓↓↓↓↓↓

/** 
move para baixo quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveBaixo () {
    if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === ''){
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] === '';
        posiçãoJogador.linha++;
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna]){
        terminaJogo();
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'Tree'){
        alert('Não pode passar pelas árvores!');
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'H20'){
        alert('Não pode passar pela água!');
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'Rock'){
        alert('Não pode passar pelas pedras!');
    }
    else{
        alert('Não pode andar mais para a direita!');
    }
    desenhaMapa();
}

/*
move para cima quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveCima () {
    if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === ''){
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] === '';
        posiçãoJogador.linha--;
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna]){
        terminaJogo();
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'Tree'){
        alert('Não pode passar pelas árvores!');
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'H20'){
        alert('Não pode passar pela água!');
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'Rock'){
        alert('Não pode passar pelas pedras!');
    }
    else{
        alert('Não pode andar mais para a Esquerda!');
    }
    desenhaMapa();
}


/*
move para esquerda quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveEsquerda () {
    if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === ''){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] === '';
        posiçãoJogador.coluna--;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1]){
        terminaJogo();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'Tree'){
        alert('Não pode passar pelas árvores!');
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'H20'){
        alert('Não pode passar pela água!');
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'Rock'){
        alert('Não pode passar pelas pedras!');
    }
    else{
        alert('Não pode andar mais para cima!');
    }
    desenhaMapa();
}


/*
move para direita quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveDireita () {
    if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === ''){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] === '';
        posiçãoJogador.coluna++;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1]){
        terminaJogo();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'Tree'){
        alert('Não pode passar pelas árvores!');
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'H20'){
        alert('Não pode passar pela água!');
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'Rock'){
        alert('Não pode passar pelas pedras!');
    }
    else{
        alert('Não pode andar mais para baixo!');
    }
    desenhaMapa();
}
