// Exercicios de interpretacao de codigos

// 1. 
//     let a = 10;
//     let b = 10;

//     console.log(b);
//     imprime o valor de b, que é 10;

//     b = 5;
//     console.log(a, b);
//     imprime a == 10 e b == 5;

// 2.
//     let a = 10;
//     let b = 20;
//     c = a; c -> 10
//     b = c; b -> 10
//     a = b; a -> 10

//     console.log(a, b, c);
//     a == 10; b == 10; c == 10;

// 3.
//     O programa citado recebe o valor de hrs trabalhados por dia
//     e o valor recebido/dia e calcula o qnt se recebe por hrs
//     Sugestao p/ as variaveis:
//     p: horasPorDia;
//     t: salarioPorDia;

// Exercício de escrita de código:

//1.

// let nome;
// let idade; 

// console.log(typeof nome, typeof idade);

//como o valor das variaveis estao vazios, o typeof deve dar "undefined"

// nome = Paulo;
// idade = 25;

//1.f. usando o prompt perguntei ao usuario o valor de cada variavel
//e apos usar o typeof para conferir o tipo, percebi que mudou para "string"

// console.log("Olá " + nome + ", você tem " + idade + " anos");

//2. 

// let pergunta1 = prompt("Você está usando roupa azul hoje?");

// let pergunta2 = prompt("Ja tomou banho hoje?"); 

// let pergunta3 = prompt("Foi na academia hoje?"); 

// console.log("Você está usando roupa azul hoje? - " + pergunta1);
// console.log("Ja tomou banho hoje? - " + pergunta2);
// console.log("Foi na academia hoje? - " + pergunta3);

// 3.

// let a = 10;
// let b = 25;

// const x = a;
// const y = b;

// a = y;
// b = x;

// console.log("O novo valor de a é", a);
// console.log("O novo valor de b é", b);

// Desafio

// let primeiroNumero = Number(prompt("digite o primeiro numero"));
// let segundoNumero = Number(prompt("digite o segundo numero"));

// 1.
// console.log(primeiroNumero + segundoNumero);

// 2.
// console.log(primeiroNumero * segundoNumero);