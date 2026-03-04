# Projeto SA - Jogo Descubra a Palavra

## Curso:
Técnico de Desenvolvimento de Sistemas
UC: Lógica de Programação

# Descrição do Projeto:
Desenvolvimento de um "Jogo de Adivinhação de Palavra" para web
O objetivo é aplicar conceitos fundamentais de lógica de programação, manipulação de DOM e organização de código em um projeto real de desenvolvimento.
O jogador deve descobrir uma palavra secreta tentando adivinhar por letras, com um número limitado de tentativas




## Regras do Jogo:
1- Quantas tentativas o jogador terá?
R: 5, para o jogo não conter palavras complexas.

2- Como o jogo irá mostrar a palavra oculta?
R: Através das lacunas que estão visíveis no site.

3- O que acontece quando o jogador acerta uma letra?
R: A letra escolhida irá ser automaticamente direcionada à palavra oculta, assim revelando a posição da mesma e salva a letra para não se repetir.

4- O que acontece quando o jogador erra uma letra?
R: A letra escolhida irá ser automaticamente direcionada à erros e salva a letra para não se repetir.

5- O que acontece quando todas as letras são descobertas?
R: A palavra oculta é descoberta, o jogador ganha o jogo e o input é bloqueado.

6- O que acontece quando as tentativas acabam?
R: O jogador perde o jogo, a palavra oculta é descoberta e o input é bloqueado.


## Variáveis:

container = Serve para ser o título do jogo;
palavraOculta = Serve para simular a palavra oculta com lacunas;
formlista = Serve para suportar o botão e o input do mesmo;
info-jogo = Serve para suportar as tentativas restantes, pontuação, letras erradas e erros com paragráfos;
barra = Serve para suportar o progresso do jogo, mudando conforme acertos e erros.


## Fluxo do Jogo:

1) O sistema escolhe uma palavra secreta
2) O jogador digita uma letra
3) O sistema verifica se a letra está na palavra
4) Se estiver correta → revela a posição em que a letra estará na palavra
5) Se estiver errada → diminui tentativas e aumenta os erros, que no final é somado até chegar no limite de tentativas
6) Verifica vitória ou derrota
