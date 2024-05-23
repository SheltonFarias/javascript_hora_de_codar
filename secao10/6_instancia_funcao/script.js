function criaCachorro(raca, patas, cor) { // funcao que cria uma objeto
  let cachorro = Object.create({})        // atraves da funcao passando os
  cachorro.raca = raca                    // paramentros informados
  cachorro.patas = patas
  cachorro.cor = cor
  return cachorro
}

let doberman = criaCachorro('doberma', 4, 'preta') // cria objetos nesses paramentros
console.log(doberman)