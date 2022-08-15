// 1-

//a-

//para acessar os arquivos deve se digitar no terminal: "node nome-do-arquivo"
//ou colocar o script start no arquivo package.json

//b- 

const name = process.argv[2];
const age = process.argv[3];

console.log(`Olá, ${name}! Você tem ${age} anos.`);

const ageNumber = Number(age);
const newAge = ageNumber + 7;

console.log(`Olá, ${name}! Você tem ${age} anos.\nEm sete anos você terá ${newAge} anos.`);