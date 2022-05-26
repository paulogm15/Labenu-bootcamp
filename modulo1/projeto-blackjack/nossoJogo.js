/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Boas vindas ao jogo de Blackjack!");
// var cartaUsuario = [];
// var cartaMaquina = [];

// if(confirm("Bora jogar?")) {
//    //começa o jogo
//    cartaUsuario.push(comprarCarta());
//    cartaUsuario.push(comprarCarta());
//    cartaMaquina.push(comprarCarta());
//    cartaMaquina.push(comprarCarta());

//    var pontosUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor;
//    var pontosMaquina = cartaMaquina[0].valor + cartaMaquina[1].valor;
   
//    console.log(`Usuário - cartas: ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} - pontuação ${pontosUsuario}`);
//    console.log(`Computador - cartas: ${cartaMaquina[0].texto} ${cartaMaquina[1].texto} - pontuação ${pontosMaquina}`);

//    if(pontosMaquina > pontosUsuario) {
//       console.log("O computador ganhou!");
//    }
//    else if(pontosUsuario > pontosMaquina) {
//       console.log("O usuário ganhou!");
//    }
//    else {
//       console.log("Empate!");
//    }
// }
// else {
//    console.log("O jogo acabou");
// }

// // Esse codigo ainda apresenta alguns erros
// // 1. Existe casos em que se tira 2 ases e ganha, quando deveria perder por ter estourado os pontos
// // 2. Outro problema é que por vezes é sorteado a mesma carta 2 vezes