let elemento = document.querySelector('#titulo-principal')

// alterando o css da html atraves do JS depois do tempo informado no setTimeout
setTimeout(() => {
  elemento.style.color = 'red'
  elemento.style.backgroundColor = 'grey'
  elemento.style.width = '400px'
}, 2000)