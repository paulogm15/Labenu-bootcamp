// // ###################Exercícios de interpretação de código

// // ----1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// // o codigo pede um numero pro usuario e confere se ele é par ou nao mandando uma mensagem para cada caso
// // o teste consiste em mandar um numero par 
// // para numeros pares ele imprime a mensagem "Passou no teste."
// // e para numero impares ele imprime a mensagem "Não passou no teste."

// // ----2. 
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // a) o codigo acima serve para informar o preço de uma determinada fruta
// // b) "O preço da fruta Maçã é R$ 2.25"
// // c) como ele vai pararia o codigo entao ele iria imprimir o valor do default

// // ----3.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// // a) a primeira linha recebe um numero do usuario
// // b) caso digite 10 aparecera "Esse numero passou no teste" 
// // caso digite - 10 nao aparecera nenhuma mensagem no terminal
// // c) sim, a variavel mensagem nao esta definida no escopo geral
// // ela so esta definida dentro do if (que funciona com uma funcao)




// // ###################Exercícios de escrita de código

// // ----1.
// const idade = Number(prompt("Informe sua idade"));

// if (idade >= 18) {
//     console.log("Você pode dirigir, mas vai com calma relampago marquinhos");
// }
// else {
//     console.log('Você não pode dirigir, mas sua hora ainda vai chegar');
// }

// // ----2. 
// var periodo = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno).");

// if (periodo == "M") {
//     console.log("Bom Dia!");
// }
// else if (periodo == "V") {
//     console.log("Boa Tarde!");
// }
// else {
//     console.log("Boa Noite!");
//     //nao estou considerando a possibilidade do usuario digitar algo diferente do pedido

// }

// // ----3.
// var periodo = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno).");

// switch (periodo) {
//     case "M":
//         console.log("Bom Dia!");
//         break;
//     case "V":
//         console.log("Boa Tarde!");
//         break;
//     case "N":
//         console.log("Boa Noite!");

// }

// // ----4.
// var generoFilme = prompt("Qual o genero do filme que vão assisitr?").toLowerCase();
// var valorIngresso = Number(prompt("Qaul o preço do ingresso?"));

// if ((generoFilme == "fantasia") && valorIngresso < 15) {
//     console.log("Bom filme!");
// }
// else {
//     console.log("Escolha outro filme :(");
// }



 // ################### Desafios

// // ----1. 

// var generoFilme = prompt("Qual o genero do filme que vão assisitr?").toLowerCase();
// var valorIngresso = Number(prompt("Qaul o preço do ingresso?"));

// if ((generoFilme == "fantasia") && valorIngresso < 15) {
//     let lanche = prompt("Qual snack que você quer comprar?");
//     console.log("Bom filme! Apreoveite o seu", lanche); 
// }
// else {
//     console.log("Escolha outro filme :(");
// }

// ----2.

