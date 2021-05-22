// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.


let perfil = {
    Nome: "André",
    Idade: 32,
    Cidade: "Itaboraí"
}
console.log(perfil)


perfil.Time = "Flamengo"

console.log(perfil)


delete perfil.Time

console.log(perfil)


let Cadastro = [
    {
        Nome: "André",
        Idade: 32,
        Telefone: 2199999999,
        Amigos: ["Amanda", "Daniel", "Luan", "Rodrigo", "Igor"],
        Cidade: "Itaboraí"
    }
]

console.log(Cadastro[0].Amigos)