class contaBanco {
  conta(saldo){
    this.saldo = saldo
  }

  saque(valor) { // retira valor informado como propriedade, na conta
    this.saldo -= valor
  }

  deposito(valor) { // adiciona valor informado como propriedade na conta
    this.saldo =+ valor
  }

}