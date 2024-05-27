const padrao = /abacax?i/ // Deixando o x opcional

console.log(padrao.test('abacaxi'))
console.log(padrao.test('abacai'))