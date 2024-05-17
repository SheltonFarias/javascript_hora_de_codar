let cachorro = {
  patas: 4,
  nome: 'shark',
  latir: () => {
    console.log('Au Au')
  }
}
let nome = cachorro.nome
let patas = cachorro.patas
console.log(`O nome é ${nome} e tem ${patas} patas`)
console.log(cachorro.latir());