const timePassed = (date: string): number => {

    const currentDate = new Date()
    const [day, month, year] = date.split("/")

    let years = currentDate.getFullYear() - Number(year)

    if (
        currentDate.getMonth() + 1 < Number(month)
        ||
        (currentDate.getMonth() + 1 === Number(month)) && currentDate.getDate() < Number(day)
    ) {
        years--
    }

    return years

}


const renewId = (birthDate: string, idDate: string): boolean => {
    let haveToRenewId = false

    const age = timePassed(birthDate)
    // console.log(`Idade: ${age}`)

    const idAge = timePassed(idDate)
    // console.log(`Tempo de emissao: ${idAge}`)

    if (age <= 20 && idAge >= 5) {
        haveToRenewId = true
    } else if (age > 20 && age <= 50 && idAge >= 10) {
        haveToRenewId = true
    } else if (age > 50 && idAge >= 15) {
        haveToRenewId = true
    }

    return haveToRenewId
}

console.log("\n")