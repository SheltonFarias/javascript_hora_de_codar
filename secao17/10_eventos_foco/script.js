// Eventos por foco
// - Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação
// - Focus para quando um elemento recebe foco e blur quando ele perde

let input = document.querySelector('#input1')

input.addEventListener('focus', () => {
  console.log('entrou no input')
})

input.addEventListener('blur', () => {
  console.log('saiu no input')
})