import express, { Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"


const app: Express = express()

app.use(express.json())
app.use(cors())

//cadastro de clientes
app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, CPF, birthDateAsString } = req.body

        const [day, month, year] = birthDateAsString.split("/")

        const birthDate: Date = new Date(`${year}-${month}-${day}`)

        // validar as entradas da requisição

        if (!name || !CPF || !birthDateAsString) {
            res.statusCode = 400
            throw new Error("\nNão foi possível cadastrar cliente, preencha todos os dados!")
        }

        const ageInMilliseconds: number = Date.now() - birthDate.getTime()

        const ageInYears: number = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)

        if (ageInYears < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        const accountsIndex = accounts.findIndex(accounts => accounts.CPF === CPF)

        if (accountsIndex >= 0) {
            res.statusCode = 409
            throw new Error("Já existe um cliente cadastrado cpm esse CPF")
        }

        // consultar ou alterar a base de dados

        accounts.push({
            name,
            CPF,
            birthDate,
            balance: 0,
            statement: []
        })

        // validar os resultados da consulta
        // enviar a resposta
        res.status(201).send("Conta criada com sucesso! =]")

    } catch (err: any) {
        console.log(err)
        res.send(err.message)
    }
})

//listar todos os clientes
app.get("/users/all", (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (err: any) {
        console.log(err)
        res.send(err.message)
    }
})

app.listen(3003, () => {
    console.log("*********\nServidor rodando na porta 3003")
})
