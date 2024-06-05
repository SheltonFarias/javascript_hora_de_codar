let elemento = document.querySelector('#titulo-principal')

// Considera as bordas
console.log('largura' + elemento.offsetWidth)
console.log('altura' +  elemento.offsetHeight)

// Não considera as bordas
console.log('largura' + elemento.clientWidth)
console.log('altura' +  elemento.clientHeight)