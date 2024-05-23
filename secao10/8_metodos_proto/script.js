function cachorro(raca,patas,cor) {
  this.raca = raca
  this.patas = patas
  this.cor = cor
}

cachorro.prototype.uivar  = function() {
  console.log('auuuuu');
}

let husky = new cachorro('Husky',4,'cinza')

husky.uivar();