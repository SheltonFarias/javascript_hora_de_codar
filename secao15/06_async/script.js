async function somar (a,b) {
  return a + b;
}

console.log(somar(2,2)) // a função se torna uma promise

somar(2,4).then(value => console.log(value));