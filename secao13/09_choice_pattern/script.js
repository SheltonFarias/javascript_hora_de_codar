const regex = /\w+: (teste1, teste2, teste3)/ // Nome: teste1 por exemplo

console.log(reg.test('Nome: teste1')) //true
console.log(reg.test('Nome: teste100')) //false