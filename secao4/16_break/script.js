let nome = "teste"
for(let i = 0; i < 10; i = i + 1) {

  if(i == 3) {
    nome = "teste1"
  }

  if(i == 5 && nome == "teste1") {
    console.log("O nome e teste, pode parar")
    break
  }
  console.log(i)
}