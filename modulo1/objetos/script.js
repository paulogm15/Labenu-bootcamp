// // --------------Exercícios de interpretação de código

// // 1. 
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) // posicao 0 no array elenco: Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // ultima posica do elenco: Virginia canvedish
// console.log(filme.transmissoesHoje[2]) // aparece o objeto transmissoesHoje

// // 2.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // objeto cachorro nome Juca
// console.log(gato) // gato vai ser igual ao chachorro, porem o nome agr é Juba
// console.log(tartaruga) // Tartaruga vai ser igual ao gato, porem com o nome Jubo
// //em todos os consoles vai imprimir todas as informacoes de cada objeto
// // a sintaxe dos 3 pontos "copia" as informacoes contidas no objeto citado

// // 3.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // false
// console.log(minhaFuncao(pessoa, "altura")) // undefined, pq nao tem propiedade altura nesse objeto
// // a funcao chama o objeto e mostra uma propiedade desse objeto

// // --------------Exercícios de escrita de código

// // 1.
// const pessoa = {
//     nome: "Paulo", 
//     apelidos: ["Paulinho", "Paulet", "Solzinho"]
//  }
//  function apresentacao(objeto, apelidos){

//      console.log("Eu sou " + objeto.nome + ", mas pode me chamar de: " + apelidos[0] + ", " + apelidos[1] + " ou " + apelidos[2]);
//  }

//  apresentacao(pessoa, pessoa.apelidos);
 

//  const pessoa2 = {...pessoa, apelidos: ["Sol", "Sorriso", "Calango com cãimbra"]}

//  apresentacao(pessoa2, pessoa2.apelidos);

// // 2.
// const pessoa1 = {
//     nome: "Paulo",
//     idade: 25,
//     profissao: "Autonomo"
// }
// const pessoa2 = {
//     nome: "Pedro",
//     idade: 18,
//     profissao: "Estudante"
// }
// function sobrePessoa(objeto1, objeto2) {
//     let array1 = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length];
//     let array2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length];

//     return (array1, array2);
// }

// sobrePessoa(pessoa1, pessoa2);


// // 3.

// var carrinho = [];

// const produto1 = {
//     nome: "banana",
//     disponibilidade: true
// };
// const produto2 = {
//     nome: "pera",
//     disponibilidade: true
// }
// const produto3 = {
//     nome: "abacaxi",
//     disponibilidade: false
// }

// function listaDeCompras(compra, fruta) {
//     return compra.push(fruta);
// }

// listaDeCompras(carrinho, produto1);
// listaDeCompras(carrinho, produto2);
// listaDeCompras(carrinho, produto3);

// console.log(carrinho);


// --------------- Desafios

// // 1.
// const seuNome = prompt("Digite seu nome:");
// const suaIdade = Number(prompt("Digite sua idade:"));
// const suaProfissao = prompt("Digite sua profissão:");

// const informacoesPessoais = {
//     nome: seuNome,
//     idade: suaIdade,
//     profissao: suaProfissao
// }

// console.log(informacoesPessoais);

// 2.



// 3.