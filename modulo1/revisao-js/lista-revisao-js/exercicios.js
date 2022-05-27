// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray[i] = array[array.length - i - 1];
    }
    return novoArray;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) { return a - b; });
    return array;
}// desafio: fazer sem a function .sort()

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            novoArray.push(array[i] ** 2);
        }
    }
    return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let max = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menor
    let objeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0,
    }

    if (num1 > num2) {
        objeto.maiorNumero = num1;
        menor = num2;
    }
    else {
        objeto.maiorNumero = num2;
        menor = num1;
    }

    if (objeto.maiorNumero % menor == 0) {
        objeto.maiorDivisivelPorMenor = true;
    }
    else {
        objeto.maiorDivisivelPorMenor = false;
    }

    objeto.diferenca = objeto.maiorNumero - menor;

    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = [];
    for (let i = 0; primeirosPares.length < n; i += 2) { // como estou pegando os pares melhor avançar o laço de 2 em 2
        if ((i % 2) == 0) {
            primeirosPares.push(i);
        }
    }
    return primeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        return "Equilátero";
    }
    else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        return "Escaleno";
    }
    else {
        return "Isósceles";
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b);
    novoArray = [];
    novoArray.push(array[array.length - 2], array[1]);

    return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = filme.atores.map((ator) => {
        return ` ${ator}`;
    })

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${atores}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO";
    return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let novoArray = [];
    for (let i = 0; i <= pessoas.length - 1; i++) {
        if (pessoas[i].idade > 14 && pessoas[i].idade < 60 && pessoas[i].altura >= 1.5) {
            novoArray.push(pessoas[i]);
        }
    }
    return novoArray;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let novoArray = [];
    for (let i = 0; i <= pessoas.length - 1; i++) {
        if (pessoas[i].idade <= 14 || pessoas[i].idade >= 60 || pessoas[i].altura < 1.5) {
            novoArray.push(pessoas[i]);
        }
    }
    return novoArray;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i <= contas.length - 1; i++) {
        let gastos = 0;
        for (let j = 0; j <= contas[i].compras.length - 1; j++) {
            gastos += contas[i].compras[j];
        }
        contas[i].saldoTotal -= gastos;
        contas[i].compras = [];
    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        
        return 0;
      });
      return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
        if (a.dataDaConsulta > b.dataDaConsulta) {
          return 1;
        }
        if (a.dataDaConsulta < b.dataDaConsulta) {
          return -1;
        }
        
        return 0;
      });
}