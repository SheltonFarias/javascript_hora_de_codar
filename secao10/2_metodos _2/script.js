const cachorro = {
  raca: 'SRD',
  uivar: () => {
    console.log('auuuuuuuuuu')
  },
  rosnar: () => {
    console.log('grrrr')
  },
  setRaca: (raca) => {
    this.raca = raca;
  },
  getRaca: () => {
    return "A raça é" + this.raca;
  }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão')

console.log(cachorro.raca)

console.log(cachorro.getRaca())