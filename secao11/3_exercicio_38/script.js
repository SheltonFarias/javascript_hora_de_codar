class endereco {
  constructor(rua, bairro, cidade, estado){
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }

  set novaRua(novaRua) {
    this.rua = novaRua
  }
}

const teste = new endereco(19, 'jose walter', 'fortaleza', 'ceara')

console.log(teste)

endereco.novaRua = 'Bernado Manuel' // atualiza a rua

console.log(teste)