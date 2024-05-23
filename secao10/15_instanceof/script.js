class Mamifero {
  constructor(patas) {
    this.patas = patas
  }
}

let coiote = new Mamifero(4)

console.log(coiote)

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas)
    this.raca = raca
  }
}

let pug = new cachorro(4, 'pug')

console.log(pug.patas)

console.log(new cachorro instanceof Mamifero) // verifica se cachorro
                                              // e uma instancia de mamifero
                                              // ve se cachorro vem de mamifero