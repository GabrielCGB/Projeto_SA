const listaPalavras = ["CARRO", "QUEDA", "SUBIR", "BOLHA", "TERMO", "MOUSE", "CABOS", "ROUPA", "PORCO", "ERROS"]

let palavraSecreta = ""
let tentativasRestantes = 6
let letrasTentadas = []
let letrasCorretas = []
let letrasDisplay = []
let pontuacao = 0


const displayPalavra = document.getElementById("palavraOculta")
const displayTentativas = document.getElementById("tentativasRestantes")
const displayPontuacao = document.getElementById("pontuacao")
const btnReiniciar = document.getElementById("btn-reiniciar")



function iniciarJogo(){
    const posicaoSorteadaDaListaDePalavras = Math.floor(Math.random() * listaPalavras.length)

    palavraSecreta = listaPalavras[posicaoSorteadaDaListaDePalavras].toUpperCase()

    palavraExibida = array(palavraSecreta.length).fill("_")

    tentativasRestantes = 6
    letrasTentadas = []
    letrasCorretas = []

    renderizarPalavra()
}



function renderizarPalavra(){

    reiniciarPalavra.innerHTML = ""

    palavraExibida.forEach(letra => {
        const span = document.createElement("span");
        span.innerText = letra;
        reiniciarPalavra.appendChild(span);
    });
    displayTentativas.textContent = tentativasRestantes;
    displayPontuacao.textContent = pontuacao(" ");
}
btnReiniciar.addEventListener("click", iniciarJogo);

function enviarLetra(){
    const letras = inpu.value.toUpperCase()

    input.value = ""

    if(letras === "" || !/[A-Z]/.test(letras)){
        return
    }
    if(letrasUsadas.includes(letras)){
        alert("Você já usou essa letra!")
        return
    }
       
    letrasUsadas.push(letras)
    
    if(palavraSecreta.includes(letras)){

        for(let i = 0; i < palavraSecreta.length; i++){

            if(palavraSecreta[i] === letras){
                palavraOculta[i] = letras
            }

        }

    }else{

        tentativasRestantes--

    }

    renderizarPalavra()
    verificarFimDoJogo()
}

    function verificarFimDoJogo(){
        if(palavraSecreta.includes("_")){
            alert("Você venceu!")
            input.disable = true
            btnReiniciar = true
        }

        if(tentativasRestantes === 0){
            alert("Você perdeu! A palavra era: " + palavraOculta)
            input.disabled = true
            botaoTentar.disabled = true
        }
    }

iniciarJogo();
