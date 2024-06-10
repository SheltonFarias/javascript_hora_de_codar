// Ações default
// - Muitos elementos/teclas já tem ações pré-definidas, como clicar num link nos leva a outra página
// - Podemos para este evento default, e criar uma lógica diferente para o elemento em questão

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let p = document.querySelector("p")
let a = document.querySelector("a")

function texto(e) { // recebendo os parametros do evento
  console.log('Clicou no button')
  e.stopPropagation(); // evita que as duas ações sejam executadas assim so executando uma.
}

btn1.addEventListener('click',texto)

p.addEventListener('click', () => {
  console.log('clicou no paragrafo')
})

a.addEventListener('click', (e) => { // preventDefault => faz para de realizar o evento padrão assim retornando apenas o console.log
  e.preventDefault()
  console.log('Não vai mudar de link')
})