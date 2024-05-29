let p = Promise.resolve(5)

console.log('outros códigos')

console.log(p) // retorna um objeto promise

p.then((value) => value + 5)
 .then((value) => console.log(`O valor é ${value}`))
