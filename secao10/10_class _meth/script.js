class cachorro {
  constructor(raca,cor) {
    this.raca = raca
    this.cor = cor
  }
}

cachorro.prototype.patas = 4

let labrador = new cachorro('labrador', 'Amarelo')

console.log(labrador.patas)

labrador.latir();