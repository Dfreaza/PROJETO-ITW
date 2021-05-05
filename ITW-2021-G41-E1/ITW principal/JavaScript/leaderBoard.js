let best = localStorage.getItem("tempoBest")
if (best === undefined){
    best = '99:99:99';
}

let newBest = converteSegundos(best)

window.addEventListener("load", peixe);

function converteSegundos (relogio){
    console.log(relogio)
    let horas = parseInt(relogio[0] + relogio[1]);
    let minutos = parseInt(relogio[3] + relogio[4]);
    let segundos = parseInt(relogio[6] + relogio[7]);
    
    return horas *3600 + minutos *60 + segundos

}

function peixe(){
    let latest = localStorage.getItem("tempoLatest")

    let newLatest = converteSegundos(latest);
    
    if(best === newLatest){
        best = latest;
    }
    else if (best > newLatest){
        best = latest;
    }

    else if(best < newLatest){
        best = best;
    }

    localStorage.setItem('tempoBest', best);

    document.getElementById('n1').innerText = best;
}
