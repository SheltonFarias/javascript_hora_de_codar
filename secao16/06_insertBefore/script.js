let novoElemento = document.createElement("p")

let texto = document.createTextNode("algum texto")

novoElemento.appendChild(texto) // adiciona texto dentro do elemento 

let elementoAlvo = document.querySelector("#titulo-principal");

let elementoPai = document.querySelector("#container-principal")

elementoPai.insertBefore(novoElemento, elementoAlvo) // inserindo p antes de titulo-principal