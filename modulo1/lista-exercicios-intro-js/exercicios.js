// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite uma altura!');
  const largura = prompt('Digite uma largura');
  var area = altura*largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  var anoAtual = prompt('Digite em que ano estamos');
  var anoNascimento = prompt('Digite o seu ano de nascimento');
  var idade = anoAtual - anoNascimento;
  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  var IMC = peso / (altura**2);
  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let NOME = prompt("Digite seu nome");
  let IDADE = prompt('Digite sua idade');
  let EMAIL = prompt('Digite seu email');
  console.log("Meu nome é " + NOME + ", tenho " + IDADE + " anos, e o meu email é " + EMAIL + ".");

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  var cores = [];
  var cor1 = prompt('Digite uma cor');
  var cor2 = prompt('Digite outra cor');
  var cor3 = prompt('Digite mais uma cor');

  cores.push(cor1, cor2, cor3);
  
  console.log(cores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  var fraseMaiuscula = string.toUpperCase();
  return fraseMaiuscula;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  var ingressos = custo / valorIngresso;
  return ingressos;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  var tamanho = (string1.length == string2.length);
  return tamanho;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimo = array[array.length - 1];
  array[array.length - 1] = array[0];
  array[0] = ultimo;
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toLowerCase() == string2.toLowerCase());

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite em que ano estamos'));
  let anoNascimento = Number(prompt('Digite o seu ano de nascimento'));
  let anoCarteira = Number(prompt('Digite o ano de emissao da sua carteira de id'));
  let idade = anoAtual - anoNascimento;
  let idadeCarteira = anoAtual - anoCarteira;
  let caso1 = (idade <= 20) && (idadeCarteira >= 5);
  let caso2 = ((idade > 20) && (idade <=50)) && (idadeCarteira >= 10);
  let caso3 = (idade > 50) && (idadeCarteira > 15);

  return console.log(caso1 || caso2 || caso3);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return (ano % 400) == 0  || ((ano % 4 == 0 ) && (ano % 100 != 0));
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  var deMaior = prompt('Vc tem mais de 18 anos?') == 'sim';
  var escolaridade = prompt('Vc tem o ensino medio completo?') == 'sim';
  var disponibilidade = prompt('Vc tem disponibilidade para fazer o curso?') == 'sim';

  return console.log(deMaior && escolaridade && disponibilidade);

}