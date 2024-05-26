function checarNumero(num) {
  let number = Number(num)
  if(Number.isNaN(number)){
    alert('Passe so numeros')
  } else return number, alert('parabens')
}
alert('responda a perguta a seguir')

let number = prompt('Digite um numero')

checarNumero(number)