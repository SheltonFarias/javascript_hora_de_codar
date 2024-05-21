let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2 
}

delete onibus.rodas; // deletando a propriedade rodas

console.log(onibus.rodas) // como foi deletado rodas e para retornar undefined

onibus.janela = 20 // criando a propriedade janela no objeto onibus

console.log(onibus)