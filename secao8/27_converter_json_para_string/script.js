let pessoa = {
  "nome": "teste",
  "idade": 28,
  "profissao": "programador",
  "hobbies": ["video game", "leitura", "correr"]
}

let pessoaTexto = JSON.stringify(pessoa) // transformando em uma string

console.log(pessoaTexto) // retorna tudo em uma string
console.log(pessoa) // retorna um objeto normal

let pessoaJSON = JSON.parse(pessoaTexto); // transforma string em um JSON 
// retorna assim a estrutura de um objeto

console.log(pessoaJSON)