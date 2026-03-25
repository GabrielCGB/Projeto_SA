// Banco de dados
const listaPalavras = ["CARRO", "QUEDA", "SUBIR", "BOLHA", "TERMO", "MOUSE", "CABOS", "ROUPA", "PORCO", "ERROS"]

// Variáveis de estado
let palavraSecreta = ""
let tentativasRestantes = 6
let letrasTentadas = []
let palavraExibida = []
let pontuacao = 0

// Seleção de elementos do DOM
const displayPalavra = document.getElementById("palavraOculta")
const displayTentativas = document.getElementById("tentativasRestantes")
const displayPontuacao = document.getElementById("pontuacao")
const btnReiniciar = document.getElementById("btn-reiniciar")
const input = document.querySelector("input")


// Função: iniciarJogo(): Responsável por sortear a palavra e resetar o tabuleiro
function iniciarJogo(){
    const posicao = Math.floor(Math.random() * listaPalavras.length)
    palavraSecreta = listaPalavras[posicao]

    palavraExibida = Array(palavraSecreta.length).fill("_")

    tentativasRestantes = 6
    letrasTentadas = []

    renderizarPalavra()
}

// Função: renderizarPalavra(): Responsável por "pintar" o estado do jogo no navegador.
function renderizarPalavra(){
    displayPalavra.innerHTML = ""

    palavraExibida.forEach(letra => {
        const span = document.createElement("span")
        span.innerText = letra + " "
        displayPalavra.appendChild(span)
    })

    displayTentativas.textContent = "Tentativas: " + tentativasRestantes
    displayPontuacao.textContent = "Pontuação: " + pontuacao
}

function enviarLetra(){
    const letra = input.value.toUpperCase()
    input.value = ""

    if(letra === "" || !/[A-Z]/.test(letra)) 
    return

    // verifica se a letra ja foi tentada
    if(letrasTentadas.includes(letra)){
        alert("Você já usou essa letra!")
        return
    }

    letrasTentadas.push(letra)
    
    if(palavraSecreta.includes(letra)){
        for(let i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] === letra){
                palavraExibida[i] = letra
            }
        }
    } else {
        tentativasRestantes--
    }

    renderizarPalavra()
    verificarFimDoJogo()
}

function verificarFimDoJogo(){
    if(!palavraExibida.includes("_")){
        alert("Você venceu!")
    }

    if(tentativasRestantes === 0){
        alert("Você perdeu! A palavra era: " + palavraSecreta)
    }
}

document.getElementById("btn-tentar").addEventListener("click", function(e){
    e.preventDefault()
    enviarLetra()
})

btnReiniciar.addEventListener("click", iniciarJogo)

iniciarJogo()
