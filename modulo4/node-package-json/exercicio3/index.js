//3-

const toDoList = ["Limpar a casa"]

toDoList.push(process.argv[2])

console.log("\n\n\nTarefa adicionada com sucesso!\n\n");
console.table(toDoList)
