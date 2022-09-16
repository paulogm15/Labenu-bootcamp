import { isConstructorDeclaration } from "typescript";

type User = {
    name: string,
    email: string,
    role: string
}

const users: User[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function emailAdmin(list: User[]): string[] {
    const userFiltered: User[] = list.filter((user) => {
        return user.role === 'admin';
    });

    const emails: string[] = userFiltered.map((user) => {
        return user.email;
    });

    return emails;
}

console.log(emailAdmin(users));