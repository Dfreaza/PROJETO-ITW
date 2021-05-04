"use strict";


//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  codigo para fazer o tempo do jogo  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;//Quantos milésimos valem 1 segundo?
let cron;

let audio = null;


//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
   
    audio.play(); 
       

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
    
}



//Para o temporizador 
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
    console.log('counter')
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
    console.log(format);

    //Retorna o valor tratado
    return format;
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ codigo para fazer o tempo do jogo ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


function imgluta1(){
    $('img').prop("src", "imagens/nada.png");


    /*Este if vai ver qual pokemon está no mapa e quando for chamada a função 'imgluta' troca o background do mapa para outro
    luta que vai ter o pokemon do jogador e o oponente */

    if (pokemon.pk1 === 'cater'){

        if (pokemon.pkPlayer === 'Bulba'){
            $('#container').css('background-image', 'url("imagens/Luta/Bulba_cater.png")');
        }
        else if (pokemon.pkPlayer === 'char'){
            $('#container').css('background-image', 'url("imagens/Luta/char_cater.png")');
        }
        else if (pokemon.pkPlayer === 'squirtle'){
            $('#container').css('background-image', 'url("imagens/Luta/squirtle_cater.png")');
        }
    }

    /*Este if vai ver qual pokemon está no mapa e quando for chamada a função 'imgluta' troca o background do mapa para outro
    luta que vai ter o pokemon do jogador e o oponente */

    if (pokemon.pk1 === 'Eiscue'){

        if (pokemon.pkPlayer === 'Bulba'){
            $('#container').css('background-image', 'url("imagens/Luta/Bulba_Eiscue.png")');
        }
        else if (pokemon.pkPlayer === 'char'){
            $('#container').css('background-image', 'url("imagens/Luta/char_Eiscue.png")');
        }
        else if (pokemon.pkPlayer === 'squirtle'){
            $('#container').css('background-image', 'url("imagens/Luta/squirtle_Eiscue.png")');
        }
    }

    /*Este if vai ver qual pokemon está no mapa e quando for chamada a função 'imgluta' troca o background do mapa para outro
    luta que vai ter o pokemon do jogador e o oponente */

    if (pokemon.pk1 === 'geodude'){

        if (pokemon.pkPlayer === 'Bulba'){
            $('#container').css('background-image', 'url("imagens/Luta/Bulba_geodude.png")');
        }
        else if (pokemon.pkPlayer === 'char'){
            $('#container').css('background-image', 'url("imagens/Luta/char_geodude.png")');
        }
        else if (pokemon.pkPlayer === 'squirtle'){
            $('#container').css('background-image', 'url("imagens/Luta/squirtle_geodude.png")');
        }
    }
}

function imgluta2(){
    $('img').prop("src", "imagens/nada.png");


    /*Este if vai ver qual pokemon está no mapa e quando for chamada a função 'imgluta' troca o background do mapa para outro
    luta que vai ter o pokemon do jogador e o oponente */

    if (pokemon.pk2 === 'pidgey'){

        if (pokemon.pkPlayer === 'Bulba'){
            $('#container').css('background-image', 'url("imagens/Luta/Bulba_pidgey.png")');
        }
        else if (pokemon.pkPlayer === 'char'){
            $('#container').css('background-image', 'url("imagens/Luta/char_pidgey.png")');
        }
        else if (pokemon.pkPlayer === 'squirtle'){
            $('#container').css('background-image', 'url("imagens/Luta/squirtle_pidgey.png")');
        }
    }

    /*Este if vai ver qual pokemon está no mapa e quando for chamada a função 'imgluta' troca o background do mapa para outro
    luta que vai ter o pokemon do jogador e o oponente */

    if (pokemon.pk2 === 'Pikachu'){

        if (pokemon.pkPlayer === 'Bulba'){
            $('#container').css('background-image', 'url("imagens/Luta/Bulba_pikachu.png")');
        }
        else if (pokemon.pkPlayer === 'char'){
            $('#container').css('background-image', 'url("imagens/Luta/char_pikachu.png")');
        }
        else if (pokemon.pkPlayer === 'squirtle'){
            $('#container').css('background-image', 'url("imagens/Luta/squirtle_pikachu.png")');
        }
    }

    /*Este if vai ver qual pokemon está no mapa e quando for chamada a função 'imgluta' troca o background do mapa para outro
    luta que vai ter o pokemon do jogador e o oponente */

    if (pokemon.pk2 === 'Growlithe'){

        if (pokemon.pkPlayer === 'Bulba'){
            $('#container').css('background-image', 'url("imagens/Luta/Bulba_growlithe.png")');
        }
        else if (pokemon.pkPlayer === 'char'){
            $('#container').css('background-image', 'url("imagens/Luta/char_growlithe.png")');
        }
        else if (pokemon.pkPlayer === 'squirtle'){
            $('#container').css('background-image', 'url("imagens/Luta/squirtle_growlithe.png")');
        }
    }
}

function voltaMapa(){

    /* este if serve para ver qual o mapa que está a ser jogado pois os pokemons são fixos dos mapa ou seja se o cater 
    existir quer dizer que o mapa de grass está a ser jogado
    */

    if (pokemon.pk1 === 'cater'){
        $('#container').css('background-image', 'url("css/imagens_css/grass_3.png")');
    }

    if (pokemon.pk1 === 'Eiscue'){
        $('#container').css('background-image', 'url("css/imagens_css/grass_3.png")');
    }

    if (pokemon.pk1 === 'geodude'){
        $('#container').css('background-image', 'url("css/imagens_css/grass_3.png")');
    }

    desenhaMapa();
}



let mapa = null;

let tamanhoMapa = null;

let posiçãoJogador = {
    linha: null,

    coluna: null
}

let pokemon = {
    pk1: null,

    pk2: null,

    pkPlayer: null
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

    pokemon.pk1 = 'cater';
    pokemon.pk2 = 'pidgey';
    pokemon.pkPlayer = 'Bulba';

    desenhaMapaConsola();
    desenhaMapa();
    document.getElementById("start").onclick = start;
    audio = document.getElementById("myAudio");
}

function mapa2(){
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

    pokemon.pk1 = 'Eiscue';
    pokemon.pk2 = 'pikachu';
    pokemon.pkPlayer = 'Bulba';

    desenhaMapaConsola();
    desenhaMapa();
}


function mapa3(){
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

    pokemon.pk1 = 'geodude';
    pokemon.pk2 = 'growlithe';
    pokemon.pkPlayer = 'Bulba';

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
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK1'){
        imgluta1();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
            luta();
        }, 100);
        mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha++;
    }
    else if (mapa[posiçãoJogador.linha + 1][posiçãoJogador.coluna] === 'PK2'){
        imgluta2();
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
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK1'){
        imgluta1();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
            luta();
        }, 100);
        mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.linha--;
    }
    else if (mapa[posiçãoJogador.linha - 1][posiçãoJogador.coluna] === 'PK2'){
        imgluta2();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
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
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK1'){
        imgluta1();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
            luta();
        }, 100);
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna--;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna - 1] === 'PK2'){
        imgluta2();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
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
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK1'){
        imgluta1();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
            luta();
        }, 100);
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] = 'Player1';
        mapa[posiçãoJogador.linha][posiçãoJogador.coluna] = '';
        posiçãoJogador.coluna++;
    }
    else if (mapa[posiçãoJogador.linha][posiçãoJogador.coluna + 1] === 'PK2'){
        imgluta2();
        setTimeout(function(){    // serve para dar tempo de alterar o background da luta 
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
