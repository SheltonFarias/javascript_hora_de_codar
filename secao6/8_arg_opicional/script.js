function soma(a,b) {
  
  if(a === undefined || b === undefined){
    console.log("Esta função precisa ter os dois argumentos")
  } else {
    return a + b;
  }

}

console.log(soma(1))

console.log(soma(1,2))


function saudacao(nome, idade) {
  if(idade === undefined) {
    console.log("olá" + nome);
  } else {
    console.log("Olá" + nome + " voce tem " + idade + " anos")
  } 
}