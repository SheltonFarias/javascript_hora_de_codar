let n = 41
let divisoes = 0

for(let i = 1; i <= n; i++){
  if(n % i == 0) {
    divisoes++
  }
}

if(divisoes == 2 ) {
  console.log(`O numero ${n} é primo`)
} else {
  console.log(`o número ${n} não é primo`)
}