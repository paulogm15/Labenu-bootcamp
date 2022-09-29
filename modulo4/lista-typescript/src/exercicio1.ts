
function userBirthDate(name: string, birthDate: string): string {

    const [day, month, year] = birthDate.split("/")

    return `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`
}

console.log(userBirthDate("Paulo", "15/06/1996"))