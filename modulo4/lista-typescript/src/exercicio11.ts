
const convertToRoman = (decimal: number): string => {

    type RomanNumbers = {
        letra: string,
        valor: number
    }

    const romanNumbers: RomanNumbers[] = [
        { letra: "M", valor: 1000 },
        { letra: "CM", valor: 900 },
        { letra: "D", valor: 500 },
        { letra: "CD", valor: 400 },
        { letra: "C", valor: 100 },
        { letra: "XC", valor: 90 },
        { letra: "L", valor: 50 },
        { letra: "XL", valor: 40 },
        { letra: "X", valor: 10 },
        { letra: "IX", valor: 9 },
        { letra: "V", valor: 5 },
        { letra: "IV", valor: 4 },
        { letra: "I", valor: 1 }
    ]


    let roman = ""

    while (decimal > 0) {

        for (const num of romanNumbers) {
            if (decimal >= num.valor) {
                decimal -= num.valor
                roman += num.letra
                break
            }
        }
    }
    return roman
}

console.log(convertToRoman(1099)) //MXCIX