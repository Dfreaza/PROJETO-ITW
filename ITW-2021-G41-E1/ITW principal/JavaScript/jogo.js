"use strict";

//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  codigo para fazer o tempo do jogo  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}


//Para o temporizador 
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ codigo para fazer o tempo do jogo ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


function imgLuta(){
    $('img').prop("src", "imagens/nada.png"); 
    $('#container').css('background-image', 'url("imagens/Luta/Bulba_cater.png")');   
}

function voltaMapa(){
    $('#container').css('background-image', 'url("css/grass_3.png")');
    desenhaMapa();
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
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/nada.png");  
            }
            else if (mapa[i][j] === 'Player1'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/Player/lucas_frente.png");
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
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/nada.png");
            }
            else if (mapa[i][j] === 'PK1'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/nada.png");
            }
            else if (mapa[i][j] === 'PK2'){
                $('#' + 'l'+ (i+1) + '_' + i +'' +j).prop("src","imagens/nada.png");
            }
        }
    }
    console.log();
}

function pedeValorAoJogador(nivelDoPokemon) {
    let n1
    let pedido
    do {
      pedido = prompt(`Para atacar adivinhe um número entre 1 e ${nivelDoPokemon}`)
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
            alert('O ataque falhou continue tentando');
        }
    } while (valorDoPlayer != numeroAleatorio){
        if (valorDoPlayer == numeroAleatorio){
            alert('O ataque acertou, derrotou o pokemon');
            querCapturar();
        }
    
    }

}

function querCapturar(){
    let msg = prompt('quer capturar este pokemon ? (Escreva s caso queira e escreva n caso não queira.)');

    if (msg === 's'){
        capturaPokemon();
    }
    else{
        voltaMapa();  
    }   
}


function capturaPokemon(){
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1
    console.log(numeroAleatorio);

    if (numeroAleatorio > 5){
        alert('capturou o pokemon Parabens!!!')
        voltaMapa();
    }
    else if (numeroAleatorio < 6){
        alert('Não capturou o pokemon mais sorte na próxima vez.')
        voltaMapa();
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
        desenhaMapa();
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK1' || mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        imgLuta();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
            luta();
        }, 100);
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha++;
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'End'){
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha++;
        desenhaMapa();
        terminaJogo();
        stop();
    }

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
        desenhaMapa();
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK1' || mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK2'){
        imgLuta();
        setTimeout(function(){      // serve para dar tempo de alterar o background da luta
            luta();
        }, 100);
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha--;
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'End'){
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha--;
        desenhaMapa();
        terminaJogo();
        stop();
    }

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
        desenhaMapa();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK1' || mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK2'){
        imgLuta();
        setTimeout(function(){         // serve para dar tempo de alterar o background da luta   
            luta();
        }, 100);
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna--;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'End'){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna--;
        desenhaMapa();
        terminaJogo();
        stop();
    }
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
        desenhaMapa();
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK1' || mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK2'){
        imgLuta();
        setTimeout(function(){      // serve para dar tempo de alterar o background da luta
            luta();
        }, 100);
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna++;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'End'){
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna++;
        desenhaMapa();
        terminaJogo();
        stop();
    }

    
    
}
