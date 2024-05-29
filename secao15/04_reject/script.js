function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(`O numero é ${num}`));
    } else {
      reject(new Error("Falhou"));
    }
  });
}

verificarNumero(2) //true
verificarNumero(3) //false