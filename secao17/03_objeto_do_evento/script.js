// O objeto do evento
// - Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento
// - Ele contém propriedades que podem ser utilizadas a nosso favor
// - o objeto é criado pelo Javascript automaticamente

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

function texto(e) { // recebendo os parametros do evento
  console.log(e)
}

btn1.addEventListener('click',texto)

btn2.addEventListener('click', (e) => {
  console.log(e)
})