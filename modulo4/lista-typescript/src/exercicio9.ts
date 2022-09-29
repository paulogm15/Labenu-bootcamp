const anagrams = (word: string): number => {
    let fatorial = 1

    for (let i = 1; i <= word.length; i++) {
        fatorial *= i
    }

    return fatorial;
}