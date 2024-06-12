// Debounce
// - Um evento que dispara múltiplas vezes pode ser um problema para a o computador do cliente
// - Podemos fazer um debounce que é um suavizador de eventos
let timeout

window.addEventListener('mousemove', (e) => { // traz um time de 1s para relatar cada vez que o mouse se mexe
  clearTimeout(timeout)
  let timeout = setTimeout(()=> {
    console.log(e.x)
  },1000)
})