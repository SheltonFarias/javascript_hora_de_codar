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

let patas = Symbol()

cachorro.prototype[patas] = 4

console.log(cachorro.prototype[patas])