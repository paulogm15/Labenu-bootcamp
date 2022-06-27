// // Exercícios de interpretação de código --------------------------

// // 1. -------------------------------------------------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// // o codigo deve imprimir cada um dos usuarios seguido por seu indice no array e depois o array completo


// // 2. -------------------------------------------------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//   // esse codigo vai criar um novo array apenas com os nomes de usuarios


// // 3. -------------------------------------------------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//   // esse codigo vai criar um novo array com os dados do usuario menos o que tem como apelido "Chijo"


// // Exercícios de escrita de código --------------------------------

// // 1. -------------------------------------------------------------

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// // a)
// const nomeDosDogs = pets.map((item, indice, array) => {
//     return item.nome;
// })

// console.log(nomeDosDogs);

// // b)

// const salsichas = pets.filter((item, indice, array) =>{
//     return item.raca == "Salsicha"
// })

// console.log(salsichas);

// // c)

// const achaPoodles = pets.filter((item, indice, array) => {
//     return item.raca == "Poodle";
// })
// // console.log(achaPoodles);

// const descontoPoodles = achaPoodles.map((item, indice, array) => {
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`);
//     return (item.nome);
//     })
// //console.log(descontoPoodles);
// //console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${descontoPoodles}!`);
// // ########## aqui o codigo ja manda a mensagem mesmo sem chamar a funcao
// // ########## tenho que dar um melhorada nisso



// // 2. -------------------------------------------------------------

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// // a)
// const mercado = produtos.map((item, indice, array) => {
//     return item.nome;
// })
// console.log(mercado);

// // b)

// const cupomDeDesconto = produtos.map((item, index, array) => {
//     item.preco = item.preco - (item.preco * 0.05);
//     return item;
// })
// console.log(cupomDeDesconto);

// // c)

// const secaoDeBebidas = produtos.filter((item, index, array) => {
//     return item.categoria == "Bebidas";
// })

// console.log(secaoDeBebidas);

// // d)

// const fanBoyDaYpe = produtos.filter((item, index, array) => {
//     if(item.nome.includes("Ypê")) {
//         return item.nome
//     }
    
// })

// console.log(fanBoyDaYpe)


// // e)

// const fanBoyDaYpe = produtos.filter((item, index, array) => {
//     if(item.nome.includes("Ypê")) {
//         return item.nome
//     }
    
// })

// const compreYpe = fanBoyDaYpe.map((item, index, array) => {
//     console.log(`Compre ${item.nome} por ${item.preco}`);
// })


// // Desafios -------------------------------------------------------

// // 1. -------------------------------------------------------------

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// // a)

// const pokemonsEmOrdemAlfabetica = pokemons.map((item, index, array) => {
//     return item.nome;
// })

// console.log(pokemonsEmOrdemAlfabetica.sort());

// // b)

// // ta tarde e nao consigo mais pensar em como resolver