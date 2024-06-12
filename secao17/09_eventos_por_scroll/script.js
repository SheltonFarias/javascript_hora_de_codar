// Eventos por scroll
// - Podemos atrelar evento ao scroll da tela também, pelo scroll
// - Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x

window.addEventListener('scroll', () => {
  if(window.scrollY > 1000){
    console.log('Ativouuuu')
  }
})