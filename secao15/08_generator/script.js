function* criarId() {
  let id = 0
  while(true){
    yield id++
  }
}

let criaID = criarId()

console.log(criaID.next().value)
console.log(criaID.next().value)
console.log(criaID.next().value)