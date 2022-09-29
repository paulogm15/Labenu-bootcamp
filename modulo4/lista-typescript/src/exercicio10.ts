const verificaPrimeiroDV = (digitos: string): boolean => {

    let multiplicador = 10, somatorio = 0

    for (let i = 0; i < digitos.length - 2; i++) {

        let digito = Number(digitos.charAt(i))
        somatorio += digito * multiplicador
        multiplicador--
    }

    let modulo = somatorio % 11
    let primeiroDV = 11 - modulo

    if (primeiroDV >= 10) {
        primeiroDV = 0
    }
    return primeiroDV === Number(digitos.charAt(9))

}
const verificaSegundoDV = (digitos: string): boolean => {

    let multiplicador = 11, somatorio = 0

    for (let i = 0; i < digitos.length - 1; i++) {

        let digito = Number(digitos.charAt(i))
        somatorio += digito * multiplicador
        multiplicador--
    }

    let modulo = somatorio % 11

    let segundoDV = 11 - modulo

    if (segundoDV >= 10) {
        segundoDV = 0
    }
    return segundoDV === Number(digitos.charAt(10))

}

const verificaMesmoNumeros = (cpf: string) => {

    var i = cpf.length
    var char = cpf.charAt(0)
    while (i--) {
        if (cpf[i] !== char) {
            return false
        }
    }
    return true
}

const verificaCPF = (cpf: string): boolean => {

    let cpfNumeros = cpf.split(".").join("")
    cpfNumeros = cpfNumeros.replace("-", "")

    if (!verificaMesmoNumeros(cpfNumeros)) {
        if (verificaPrimeiroDV(cpfNumeros)) {
            if (verificaSegundoDV(cpfNumeros)) {

                return true
            }
        }
    }
    return false
}
