function cachorro(raca,patas,cor) {
  this.raca = raca
  this.patas = patas
  this.cor = cor
  this.uivar = () => {
    console.log('grrrrr')
  }
}

let husky = new cachorro('husky',4,'branco')
console.log(husky)

husky.uivar()
