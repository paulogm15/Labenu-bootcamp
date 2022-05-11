// // #Exercicios de interpretaçao

// // 1.

// let array
// console.log('a. ', array)// undefined

// array = null
// console.log('b. ', array)//null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)//11

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19
// console.log('e. ', array)//i+1 = 1 entao ele vai mudar a posicao 1; array[1] = 19

// const valor = array[i+6]//posicao 6 
// console.log('f. ', valor)//array[6] = 9

// // 2.

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//tudo maiusculo e vai trocar o caractere A por I; tbm imprime o tamanha da string
// //SUBI NUM ÔNIBUS EM MIRROCOS
// //frase.length = 27; os espaços tbm sao caracteres


// // #Exercicios de escrita de código

// // 1.

// let nomeDoUsuario = prompt("Informe seu nome:");
// let emailDoUsuario = prompt("Informe seu email:");

// console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!");

// // 2.


// const comidas = ['pizza', 'hamburger', 'lasanha', 'chocolate', 'churrasco'];

// console.log(comidas);
// console.log("Essas são minhas comidas preferidas: ");//ja dava pra fazer um laço de repeticao aqui pra agilizar as coisas
// console.log(comidas[0]);//dava pra usar um "\n" pra quebrar a linha e usar apenas um console.log
// console.log(comidas[1]);
// console.log(comidas[2]);
// console.log(comidas[3]);
// console.log(comidas[4]);

// comidas[1] = prompt("Qual a sua comida favorita?");
// console.log(comidas);

// 3.

// const listaDeTarefas = [];
// listaDeTarefas[0] = prompt("Qual a primeira tarefa que você precisa realizar hoje?");
// listaDeTarefas[1] = prompt("Qual a segunda tarefa que você precisa realizar hoje?");
// listaDeTarefas[2] = prompt("Qual a terceira tarefa que você precisa realizar hoje?");

// console.log(listaDeTarefas);

// let i = prompt("digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 ");

// listaDeTarefas.splice(i, 1);

// console.log(listaDeTarefas);



// //          #########Desafios###########

// // 1.

// var myString = prompt("Digite uma frase");
// var splits = myString.split(/[\s,]+/);//a funcao .split pega um separador e um limite
// //a expressão regular (/[\s,]+/) varrerá a string em busca de caracteres de espaço, que será o ponto de separação do texto.
// console.log(splits);

// // 2.

// var frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

// for(var i = 0; i < frutas.length - 1; i++){
//     if(frutas[i] == "Abacaxi"){
//         console.log("indice: " + i, "\ntamanho da string: " +frutas.length);
//     }
// }