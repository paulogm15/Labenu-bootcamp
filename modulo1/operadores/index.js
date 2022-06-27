// Exercicio de interpretação de código

// 1.

const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado); //a. false

resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado); //b. false

resultado = !resultado && (bool1 || bool2);
console.log("c. ", resultado); //c. true

console.log("d. ", typeof resultado); //d. boolean

// 2.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// os prompts recebem strings
// entao ao fazer o calculo na verdade oq vai acontecer é a concatenação dos dois numeros

// 3.

let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = Number(primeiroNumero) + Number(segundoNumero);

console.log(soma);


// Exercícios de escrita de código

// 1.

let suaIdade = prompt("Qual a sua idade?");
let idadeAmigo = prompt("Qual a idade do(a) seu(sua) melhor amigo(a)?");

console.log("Sua idade é maior do que a do seu melhor amigo?", (suaIdade > idadeAmigo));

console.log(Math.abs(suaIdade - idadeAmigo));

// 2. 

let numeroPar = prompt("Insira um número par");

console.log(Number(numeroPar) % 2);
//o resto da divisao por 2 de um numero par sempre é 0
//caso esse código receba um ímpar o resto dessa divisão será != (diferente) de 0

// 3.

let idadeUsuario = prompt("Digite sua idade");

console.log("Sua idade em meses é aproximadamente: ", idadeUsuario * 12);//12 meses em 1 ano
console.log("Sua idade em dias é aproximadamente: ", idadeUsuario * 365);//365 dias em um ano
console.log("Sua idade em horas é aproximadamente: ", idadeUsuario * 365 * 24);//24hrs em 1 dia e 365 dias em 1 ano

// 4.

let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));

console.log("O primeiro numero é maior que segundo?", num1 > num2);
console.log("O primeiro numero é igual ao segundo?", num1 == num2);
console.log("O primeiro numero é divisível pelo segundo?", (num1 % num2) == 0);
console.log("O segundo numero é divisível pelo primeiro?", (num2 % num1) == 0);




// Desafio

