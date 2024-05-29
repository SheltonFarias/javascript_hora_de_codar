console.log('1')

setTimeout(function() { // Retornando somente depois do tempo estipulado
  console.log('5')      // sendo um retorno assincrono
}, 2000);

console.log('2')
console.log('3')
console.log('4')
