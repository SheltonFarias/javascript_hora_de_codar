function saudacao(nome) {
  if(typeof nome != 'string') {
    throw new Error('o paramentro precisa ser string')
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao('Matheus')
saudacao(5)
