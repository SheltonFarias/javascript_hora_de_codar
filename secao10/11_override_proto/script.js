class cachorro {
  constructor(raca, cor) {
    this.raca = raca
    this.cor = cor
  }

  latir() {
    console.log("au au")
  }
}

cachorro.prototype.raca = 'SRD'
cachorro.prototype.patas = 4

let labrador = new cachorro('Labrador', 'Amarelo')

labrador.latir()

console.log(cachorro.prototype.raca)