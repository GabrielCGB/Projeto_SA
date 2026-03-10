const listaPalavras = ["CARRO", "QUEDA", "SUBIR", "BOLHA", "TERMO", "MOUSE", "CABOS", "ROUPA", "PORCO", "ERROS"]

let palavraSecreta = []
let tentativasRestantes = []
let palavraDisplay = []
let letrasCorretas = []
let letrasDisplay = []
let letrasAdivinhadas = []
let pontuacao = 0


const letrasDisplay = document.getElementById("palavraOculta")
const tentativasRestantes = document.getElementById("tentativasRestantes")
const pontuacao = document.getElementById("pontuacao")



function iniciarJogo(){
    const posicaoSorteadaDaListaDePalavras = math.floor(math.random() * listaPalavras.length)

    palavraSecreta = listaPalavras(posicaoSorteadaDaListaDePalavras).toUpperCase()

    palavraDisplay = array(palavraSecreta.length).fill("_")

    tentativasRestantes = 6
    letrasCorretas = []
    letrasAdivinhadas = []

    reiniciarPalavra()
}



function reiniciarPalavra(){

    palavraDisplay.innerHTML = ""

    letrasDisplay.forEach(letra )[

    const span = document.createElement("span")

    span.innerHTML = letra

    palavraDisplay.appendchild(span)
}{

    displayTentativas.innerHTML = tentativasRestantes
    displayPontuacao.innerHTML = pontuacao
}



