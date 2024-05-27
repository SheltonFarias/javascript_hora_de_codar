const cep = /\d{5}-\d{3}/ // separando em 2 grupos 1º = 5 , 2º = 3

console.log(cep.test(188117-500)) // true
console.log(cep.test('teste'))  // false