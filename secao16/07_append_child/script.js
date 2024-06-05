let novoElemento = document.createElement("p")

let texto = document.createTextNode("algum texto")

novoElemento.appendChild(texto) // adiciona texto dentro do elemento 

let p = document.querySelector("paragrafo-principal")
let pai = p.parentChild

pai.appendChild(novoElemento);