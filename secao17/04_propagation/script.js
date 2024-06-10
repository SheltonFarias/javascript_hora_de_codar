// Propagação
// - Quando não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro tem um evento
// - Pode acontecer a propagação, ou seja, o outro elemento ativar uma evento também, aí teremos a duplicação
// - Por isso temos um método que para esta propagação e resolve este problema, o stopPropagation

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let p = document.querySelector("p")

function texto(e) { // recebendo os parametros do evento
  console.log('Clicou no button')
  e.stopPropagation(); // evita que as duas ações sejam executadas assim so executando uma.
}

btn1.addEventListener('click',texto).

p.addEventListener('click', () => {
  console.log('clicou no paragrafo')
})