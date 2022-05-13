// // #Exercícios de interpretação de código


// // 1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a) O que vai ser impresso no console? 10 e 50;
// // b) O que aconteceria se retirasse os dois console.log e
// // simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
// // O que apareceria no console? Não vai aparecer nada pq apesar de de chamar a funcao, em nenhum momento os valores sao impressos no console


// // 2.

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// // a) Essa função pega a frase digitada pelo usuario coloca em caixa baixa e confere se tem a palavra cenoura
// // b) Em todos os casos ela deve retornar "true"

// // #Exercícios de escrita de código


// // 1.
// // a)

// function apresentacao (){
//     var NOME = "Paulo";
//     var IDADE = "25";
//     var ENDEREÇO = "Brasília";
//     var PROFISSÃO = "Estudante";
//     console.log("Eu sou " + [NOME] + ", tenho " + [IDADE] + " anos, moro em " + [ENDEREÇO] + " e sou " + [PROFISSÃO] + ".");
// }
// apresentacao();

// // b)
// var nome = prompt("Digite seu nome:");
// var idade = prompt("Digite sua idade:");
// var endereco = prompt("Digite seu endereço:");
// var profissao = prompt("Digite sua profissão:");


// function apresentacao (NOME, IDADE, ENDEREÇO, PROFISSÃO){
//     var NOME
//     var IDADE
//     var ENDEREÇO
//     var PROFISSÃO
//     console.log("Eu sou " + NOME + ", tenho " + IDADE + " anos, moro em " + ENDEREÇO + " e sou " + PROFISSÃO + ".");
// }
// apresentacao(nome, idade, endereco, profissao);



// // 2.

// // a)

// function soma(num1, num2) {
//     var somar = num1 + num2;
//     console.log(somar);
// }
// soma(Number(prompt("digite o primeiro numero:")), Number(prompt("digite o segundo numero:")));

// // b)

// function qualEMaior(num1, num2) {
//     var resposta = num1 > num2;
//     console.log(resposta);
// }
// qualEMaior(Number(prompt("digite o primeiro numero:")), Number(prompt("digite o segundo numero:")));

// // c)

// function ePar(num1) {
//     var par = num1 % 2;
//     console.log(par == 0);//deixei == pq nao quis transformar o prompt pra number
// }
// ePar(prompt("Digite um numero:"));

// // d)

// function tamanho(frase) {
//     console.log(frase.length);
//     fraseMauiscula = frase.toUpperCase();
//     console.log(fraseMauiscula);
// }

// tamanho(prompt("Digite uma frase:"));

// // 3.

// function somaDoisNumeros(num1, num2) {
//     var soma = Number(num1) + Number(num2);
//     return soma;
// }
// function subtracao(num1, num2) {
//     return (num1 - num2);
// }
// function produto(num1, num2) {
//     return (num1 * num2);
// }
// function razao(num1, num2) {
//     return (num1 / num2);
// }

// var num1 = prompt("Digite o primeiro numero:");
// var num2 = prompt("Digite o segundo numero:");
// console.log(somaDoisNumeros(num1, num2));
// console.log(subtracao(num1, num2));
// console.log(produto(num1, num2));
// console.log(razao(num1, num2));



// // #Desafios

