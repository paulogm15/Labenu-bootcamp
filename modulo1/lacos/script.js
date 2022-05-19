// // ######################### Exercícios de interpretação de código
// // ---- 1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// // o laço vai somando os valores que o contador assume
// // portanto ele deve somar os numeros de 0 ate 4 (ja que quando o contador assume o valor de 5 o laço para)
// // 0+1+2+3+4 = 10;

// // ---- 2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // var i = 0;
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
        
//         // console.log("indice do array:", i);
//         // i++;
// 	}
// }
// // o laço deve imprimir todos os valores maiores de 18 desse array
// // 19, 21, 23, 25, 27, 30

// // b) se adicionar um contador para esse codigo da pra achar
// // mas esse contador apesar de conseguir contar o indice, ele nao esta atrelado a ele
// //obs: vi essa ideia no canal de duvidas

// // ---- 3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)// console.log ta dentro do laço, entao ele deve imprimir em todos as iteracoes do laco
//   quantidadeAtual++
// }
// // esse programa imprime + um asterisco para cada linha impressa no console
// // entao no cosole deve aparecer 4 linhas, a primeira com 1 asterisco e a ultima com 4



// // ######################### Exercícios de escrita de código

// // ---- 1.

// const numeroDePets = prompt("Quantos pets voce tem?");// deixei em string pq vou usar o == em vez de ===
// var nomeDosPets = [];

// if (numeroDePets == 0) {
//     console.log("Que pena! Você pode adotar um pet!");
// }
// else {
//     for(let i = 0; i < numeroDePets; i++) {
//         var nomeDoPet = prompt("Digite o nome do seu "+ (i+1) + "º pet");
//         nomeDosPets.push(nomeDoPet);
//     }
//     console.log("O nome dos pets são: " + nomeDosPets); // caso queira em forma de array é so imprimir apenas o nomeDosPets
// }



// ---- 2.

// const arrayOriginal = [0, -1, 2, 3, -4, 5, 6, 7, 8, 9]; // array ex

// // a)
// function mostraArray(array) {
//     console.log(array);
// }

// // b)
// function decimoArray(array) {
//     for(let i = 0; i <= array.length - 1; i++) {
//         array[i] = array[i] / 10;        
//     }
//     console.log(array);
// }

// // c)
// function arrayPar(array) {
//     var pares = [];
//     for(let i = 0; i<= array.length - 1; i++) {
//         if((array[i]%2) == 0) {
//             pares.push(array[i]);
//         }
//     }
//     console.log(pares);
// }

// // d)
// function arrayTexto(array) {
//     var texto = [];
//     for(let i = 0; i <= array.length - 1; i++) {
//         texto.push(`O elemento do índex ${i} é: ${array[i]}`);
//     }
//     console.log(texto);
// }

// // e)
// function maxMin(array) {
//     var max = 0;
//     var min = 0;
    
//     for(let i = 0; i <= array.length; i++) {
//         if(array[i]>max) {
//             max = array[i];
//         }
//         else if(array[i]<min) {
//             min = array[i];
//         }
//     }
//     console.log(max, min);
// }

// // ######################### Desafios

// // ---- 1.

// var numeroSecreto = prompt("Insira um numero para jogar:");
// console.log("Vamos jogar!");

// var chute = prompt("Tenta adivinhar o numero:");

// i = 1;

// while(chute != numeroSecreto) {
//     i++;
//     if(chute > numeroSecreto) {
//         console.log("Errou. O número escolhido é menor");
//         console.log("O número chutado foi:", chute);
//         chute = prompt("Tente de novo");
//     }
//     else if(chute < numeroSecreto) {
//         console.log("Errou. O número escolhido é maior");
//         console.log("O número chutado foi:", chute);
//         chute = prompt("Tente de novo");
//     }
// }

// console.log("Acertou miseravi");
// console.log("Vc so precisou de", i, "tentivas");

// // o codigo ainda apresenta falhas
// // mts vezes ele nao indica corretamente se o numero escolhido é maior ou menor

// ---- 2.
// acredito que em vez de pedir uma variavel para o usuario seja apenas colocar a variavel var numeroSecreto = parseInt(Math.random() * 101);
//parseInt pega so a parte inteira e o Math.random pega numero entre 0 e 1
