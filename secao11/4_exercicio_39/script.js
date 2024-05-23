class Carro {
  constructor(marca, cor, gasolinaRestante, consumo){
    this.marca = marca
    this.cor = cor
    this.gasolinaRestante = gasolinaRestante
    this.consumo = consumo
  }


  dirigir(km){
    let litrosCosumidos = km / this.consumo

    this.gasolinaRestante -= litrosCosumidos
  }

  abastecer(l){
    this.gasolinaRestante += l
  }
}

let carro = new Carro('vw', 'cinza', 100, 14)

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(10)

console.log(carro)