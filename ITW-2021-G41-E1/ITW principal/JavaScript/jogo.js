"use strict";

let tempoDoJogo = null;

let tempo = null;

function mostraTempo (){
    
}

let mapa = null;

let tamanhoMapa = null;

let posiçãoJogador = {
    linha: null,

    coluna: null
}

window.addEventListener("load", mapa1);

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


    desenhaMapaConsola();
}

function desenhaMapaConsola (){
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

function desenhaMapa (mapa){
    for (let i = 0; i < tamanhoMapa; i++){
        for (let j = 0; j < tamanhoMapa; j++){
            if (mapa[i][j] === ''){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'Player1'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'Tree'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'Rock'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'H20'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'End'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'PK1'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
            else if (mapa[i][j] === 'PK2'){
                document.getElementById('l'+ (i+1) + '_' + i +'' +j).innerHTML('deu');
            }
        }
    }
    console.log();
}

function pedeValorAoJogador(nivelDoPokemon) {
    let n1
    let pedido
    do {
      pedido = prompt(`Escreva um número inteiro entre 1 e ${levelPk}`)
      n1 = parseInt(pedido);
      if(n1 > maximo || n1 < 1){
        alert(`O valor ${n1} está fora do intervalo de validade.`);
      }
      else if (Number.isNaN(n1)){
        alert(`O valor ${pedido} não é um número inteiro.`);
      }
    } while (Number.isNaN(n1) || n1 > maximo || n1 < 1);
  
    return n1
  }


function luta(){
    let levelPk = null;
    let valorDoPlayer = null;
    let resultadoTentativa = null;

    pedeValorAoJogador(levelPk)

    resultadoTentativa.push(valorDoPlayer);

    if (valorTentativa == numeroAleatorio) {
        capturaPokemon();
    } 
        
    else if (valorTentativa < numeroAleatorio || valorTentativa > numeroAleatorio) {
          alert('Continue tentando');
    } 

}

function capturaPokemon(){
    
}




document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if (keyName === 'ArrowUp') {
        moveCima();
    }
    else if (keyName === 'ArrowDown'){
        moveBaixo();
    }
    else if (keyName === 'ArrowRight'){
        moveDireita();
    }
    else if (keyName === 'ArrowLeft'){
        moveEsquerda();
    }

  }, false);


// ↓↓↓↓↓↓↓ movimentação do jogador (cima,baixo,esquerda,direita) ↓↓↓↓↓↓↓

/** 
move para baixo quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveBaixo () {
    if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === ''){
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha++;
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'End'){
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
    desenhaMapaConsola();
}

/** 
move para cima quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveCima () {
    if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === ''){
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha--;
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK1' || mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'End'){
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
        alert('Não pode andar mais para Cima!');
    }
    desenhaMapaConsola();
}


/** 
move para esquerda quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveEsquerda () {
    if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === ''){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna--;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'End'){
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
        alert('Não pode andar mais para a Esquerda!');
    }
    desenhaMapaConsola();
}


/**
move para direita quando existe um espaço vazio no array se houve 
um obstaculo ou nao houver mais casas dá um alerta.
*/
function moveDireita () {
    if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === ''){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna++;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        luta();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'End'){
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
    desenhaMapaConsola();
}
