let pessoa = {
  nome: 'teste'
}

let pessoa2 = pessoa

console.log(pessoa == pessoa2)

pessoa2.nome = 'teste2'

console.log(pessoa2.nome)