import { Account } from "./types";

export const accounts: Account[] = [
    {
        name: "João",
        CPF: "123.456.789.01",
        birthDate: new Date("1990-01-01"),
        balance: 1200,
        statement: []
    },
    {
        name: "Maria",
        CPF: "123.456.789.02",
        birthDate: new Date("1990-01-01"),
        balance: 2500,
        statement: []
    }
]