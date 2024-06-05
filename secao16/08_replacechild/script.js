let novoElemento = document.createElement("p")

let texto = document.createTextNode("algum texto")

novoElemento.appendChild(texto) // adiciona texto dentro do elemento 

let heading = document.querySelector('#titulo-principal')
let paiHeadding = heading.parentNode;

paiHeadding.replaceChild(novoElemento, heading) // substitui um pelo outro