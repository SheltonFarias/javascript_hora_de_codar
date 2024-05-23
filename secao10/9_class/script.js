class cachorro {
  constructor(raca,patas,cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
  }
  latir() {
    console.log('au au')
  }
}


cachorro.prototype.patas = 4

let labrador = new cachorro('labrador', 4, 'Amarelo')

console.log(labrador.patas)

labrador.latir()