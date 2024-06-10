// Eventos de tecla (key event)
// - Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown
// - Podemos realiza ações neste eventos também
// - keyup é quando soltamos a tecla;
// - keydown é quando apertamos;

window.addEventListener("keydown", (e) => {
  if(e.key == 'q') {
    console.log('apertou a tecla q')
  } else if(e.key == 'Enter') {
    console.log('apertou enter')
  }
})

window.addEventListener('keyup', (e) => {
  if(e.key == 'Enter') {
    console.log('Soltou o enter')
  }
})