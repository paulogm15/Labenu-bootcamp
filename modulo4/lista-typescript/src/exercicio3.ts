enum GENERO {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

type Movie = {
	title: string,
	year: number,
	genre: GENERO,
	score?: number
}

const movieInType = (title: string, year: number, genre: GENERO, score?: number): Movie => {
	if (score) {
		return {
			title: title,
			year: year,
			genre: genre,
			score: score
		}
	}
	else {
		return {
			title: title,
			year: year,
			genre: genre
		}

	}
}

console.log(movieInType("matrix", 1999, GENERO.ACAO, 8.7))
console.log(movieInType("matrix", 1999, GENERO.ACAO))