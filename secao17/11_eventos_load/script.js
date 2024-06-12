// Evento de carregamento
// - Podemos atrelar um evento quando a página carrega, pelo evento load
// - E antes do usuario fechar a página pelo evento beforeunload

window.addEventListener('load', () => { //
  alert('teste teste teste')
})

window.addEventListener('beforeunload', (e) => {
  
  e.returnValue = null
})