class cachorro {
  constructor(raca, cor) {
    this.raca = raca
    this.cor = cor
  }

  latir() {
    console.log("au au")
  }

  get getcor() {
    return this.cor
  }

  set setcor(cor) {
    this.cor = cor
  }
}

let pastor = new cachorro('Pastor', 'sem cor')

console.log(pastor)

pastor.setcor = 'marrom'

console.log(pastor.getcor)