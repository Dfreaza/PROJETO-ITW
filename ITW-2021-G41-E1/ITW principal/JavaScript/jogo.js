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
        ['Tree','Tree','Tree','Tree','Tree','Tree','Tree'],
        ['Tree','Player1','','PK1','Tree','','Tree'],
        ['Tree','H20','H20','','','','Tree'],
        ['Tree','H20','','','Rock','','Tree'],
        ['Tree','Tree','','Rock','Rock','Tree','Tree'],
        ['Tree','','','','PK2','','End'],
        ['Tree','Tree','Tree','Tree','Tree','Tree','Tree']
    ]

    posiçãoJogador.linha = 1;
    posiçãoJogador.coluna = 1;

    tamanhoMapa = 7


    desenhaMapaConsola();
    desenhaMapa();
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

function desenhaMapa (){
    for (let i = 0; i < tamanhoMapa; i++){
        for (let j = 0; j < tamanhoMapa; j++){
            if (mapa[i][j] === ''){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/Pokemon_Center_Exterior.png");  
            }
            else if (mapa[i][j] === 'Player1'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/Pokemons/charmander.jpg");
            }
            else if (mapa[i][j] === 'Tree'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/tree_grass.png");
            }
            else if (mapa[i][j] === 'Rock'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/stone_grass.png");
            }
            else if (mapa[i][j] === 'H20'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/fonte.png");
            }
            else if (mapa[i][j] === 'End'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/Pokemon_Center_Exterior.png");
            }
            else if (mapa[i][j] === 'PK1'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/pokemons/pikachu.png");
            }
            else if (mapa[i][j] === 'PK2'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/pokemons/pikachu.png");
            }
        }
    }
    console.log();
}

function pedeValorAoJogador(nivelDoPokemon) {
    let n1
    let pedido
    do {
      pedido = prompt(`Escreva um número inteiro entre 1 e ${nivelDoPokemon}`)
      n1 = parseInt(pedido);
      if(n1 > nivelDoPokemon || n1 < 1){
        alert(`O valor ${n1} está fora do intervalo de validade.`);
      }
      else if (Number.isNaN(n1)){
        alert(`O valor ${pedido} não é um número inteiro.`);
      }
    } while (Number.isNaN(n1) || n1 > nivelDoPokemon || n1 < 1);
  
    return n1
  }


function luta(){
    let levelPk = 12;
    let valorDoPlayer = null;


    let numeroAleatorio = Math.floor(Math.random() * levelPk) + 1
    console.log(numeroAleatorio);

    do{
        valorDoPlayer = pedeValorAoJogador(levelPk);
        if (valorDoPlayer != numeroAleatorio){
            alert('Não é o número certo continue tentando');
        }
    } while (valorDoPlayer != numeroAleatorio){
        if (valorDoPlayer == numeroAleatorio){
            alert('Certo');
            capturaPokemon();
        }
    
    }

}

function capturaPokemon(){
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1
    console.log(numeroAleatorio);

    if (numeroAleatorio > 5){
        alert('O numero aleatório foi maior do que 5 e por isso capturou o pokemon Parabens!!!')
    }
    else if (numeroAleatorio < 6){
        alert('O numero aleatório foi menor do que 5 por isso nao capturou o pokemon mais sorte na próxima vez.')
    }
}

function terminaJogo(){
    alert('parabens acabou o jogo!!!')
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
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha++;
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'End'){
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha++;
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
    desenhaMapa();
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
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha--;
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'End'){
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha--;
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
    desenhaMapa();
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
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK1' || mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK2'){
        luta();
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna--;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'End'){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna--;
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
    desenhaMapa();
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
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK1' || mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK2'){
        luta();
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna++;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'End'){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna++;
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
        alert('Não pode andar mais para a Direita!');
    }
    desenhaMapaConsola();
    desenhaMapa();
}
