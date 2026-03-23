# Projeto SA - Jogo Descubra a Palavra

## Curso:
Técnico de Desenvolvimento de Sistemas
UC: Lógica de Programação

# Descrição do Projeto:
Desenvolvimento de um "Jogo de Adivinhação de Palavra" para web.
O objetivo é aplicar conceitos fundamentais de lógica de programação, manipulação do DOM e organização de código em um projeto real de desenvolvimento.
O jogador deve descobrir uma palavra secreta tentando adivinhar letras, com um número limitado de tentativas.




## Regras do Jogo:
1 - Quantas tentativas o jogador terá?<br>
R: 5, para que o jogo não contenha palavras complexas/longas.

2 - Como o jogo irá mostrar a palavra oculta?<br>
R: Por meio de lacunas visíveis no site.

3 - O que acontece quando o jogador acerta uma letra?<br>
R: A letra escolhida será automaticamente direcionada à palavra oculta, revelando sua posição e sendo salva para não se repetir.

4 - O que acontece quando o jogador erra uma letra?<br>
R: A letra escolhida será automaticamente direcionada aos erros e será salva para não se repetir.

5 - O que acontece quando todas as letras são descobertas?<br>
R: A palavra oculta é revelada, o jogador vence o jogo e o input é bloqueado.

6 - O que acontece quando as tentativas acabam?<br>
R: O jogador perde o jogo, a palavra oculta é revelada e o input é bloqueado.


## Variáveis:

container = Serve como título do jogo;<br>
palavraOculta = Serve para simular a palavra oculta com lacunas;<br>
formLista = Serve para suportar o botão e o input;<br>
infoJogo = Serve para exibir as tentativas restantes, pontuação, letras erradas e erros com parágrafos;<br>
barra = Serve para exibir o progresso do jogo, mudando conforme acertos e erros.


## Fluxo do Jogo:

1- O sistema escolhe uma palavra secreta
2- O jogador digita uma letra
3- O sistema verifica se a letra está na palavra
4- Se estiver correta → revela a posição da letra na palavra
5- Se estiver errada → diminui as tentativas e aumenta os erros, que são somados até atingir o limite
6- Verifica vitória ou derrota


## Pseudocódigo:

Iniciar jogo<br>
Selecionar palavra aleatória...<br>

Definir tentativas: 5<br>
Definir pontuação: 0<br>
Definir erros: 0<br>

Enquanto tentativas > 0<br>
  Selecionar uma letra<br>

  Se a letra estiver na palavra<br>
    Revelar a letra na posição correta<br>
  Senão<br>
    Diminuir tentativas<br>
    Aumentar erros<br>
    Adicionar a letra às letras erradas<br>
  FimSe<br>

  Verificar vitória<br>
  Se a palavra estiver completa<br>
    Mostrar "Você venceu!"<br>
    Aumentar pontuação<br>
    Parar o jogo<br>
  FimSe<br>

  Se a letra repetida estiver na palavra<br>
    Mostrar "Letra repetida, tente novamente"<br>
  FimSe<br>

  Verificar derrota<br>
  Se tentativas = 0<br>
    Mostrar "Você perdeu"<br>
    Aumentar erros<br>
    Aumentar letras erradas<br>
    Parar o jogo<br>
  FimSe<br>
