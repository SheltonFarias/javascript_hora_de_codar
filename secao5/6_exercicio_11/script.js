let age = 18
let cnh = true

if(age >= 18 && cnh == true) {
  console.log('Permitido o manuseio de veiculos')
} else if(age >= 18 && cnh == false) {
  console.log('idade permitida, porem não possui CNH')
} else {
  console.log('Não apresenta idade permitida para possuir CNH')
}