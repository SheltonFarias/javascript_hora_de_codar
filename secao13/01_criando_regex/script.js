const reg1 = new RegExp('bola')

console.log(reg1.test('tem bola?'))
console.log(reg1.test('nao tem'))

const reg2 = /bola/

let text = 'tem bola na cesta'

console.log(reg2.test('tem bola?'))
console.log(reg2.test('nao tem'))
console.log(reg2.test(text))