function recursao(n) {
  if(n - 1 == 2) {
    console.log('Recursao parou')
  } else if(n % 2 != 0){
    console.log('Numero Impar')
    recursao(n-1)
  } else {
    console.log('Numero par')
  }
}