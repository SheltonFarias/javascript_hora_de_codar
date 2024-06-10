// Removendo eventos
// - Da mesma forma que podemos adicionar eventos, podemos remover quando acharmos
// - Para isso utilizamos o método removeEventListener, onde passamos o evento e a função que o evento está escutando


let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

function texto() {
  console.log('clicou!!!!')
}

btn1.addEventListener('click',texto)

btn2.addEventListener('click', () => {
  btn1.removeEventListener('click', texto)
})