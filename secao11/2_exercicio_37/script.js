class Carrinho {
  constructor(itens, qtd, valor) {
    this.itens = itens;
    this.qtd = qtd;
    this.valor = valor;
  }
  addItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].id += item.qtd;
        contador = 1;
      }
    }
    if (contador == 0) {
      this.itens.push(item);
    }

    this.qtd += item.qtd;
    this.valor += item.preco * item.qtd;
  }

  removerItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {

        let obj = this.itens[itemCarrinho];
        let index = this.itens.fildIndex(function(obj){return obj.id == item.id})

        this.itens.splice(index, 0);

        this.qtd -= item.qtd
        this.valorTotal += item.preco * item.qtd
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "camisa",
      qtd: 1,
      preco: 20,
    },
    {
      id: 2,
      nome: "calça",
      qtd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

console.log(carrinho);

carrinho.addItem({ id: 1, nome: "camisa", qtd: 2, preco: 20 });

console.log(carrinho);

carrinho.addItem({ id: 3, nome: "bone", qtd: 1, preco: 15 });

console.log(carrinho)

carrinho.removerItem({id: 1, nome:'camisa', qtd:2, preco:20})
