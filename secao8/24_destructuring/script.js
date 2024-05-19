let obj = {
  rodas: 4,
  portas:4,
  tetoSolar: true,
  motor: '2.0'
}

const {rodas: vRodas, portas:vPortas, tetoSolar: vTetoSolar, motor: Vmotor}
 = obj
// desistrutura o objeto atribuindo assim a cada propriedas um nome
//não precisando chamar o obj para puxar uma propriedade
console.log(vRodas)
console.log(vPortas)