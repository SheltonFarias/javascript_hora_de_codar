const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => { // filter vai filtrar meu array retornando os elementos que eu definir
  if(n >= 3) {
    return n
  }
})
console.log(highNumbers)

const users = [
  {name: 'teste1', available: true},
  {name: 'teste2', available: false},
  {name: 'teste3', available: false},
  {name: 'teste4', available: true},
]

const availableUsers = users.filter((user) => user.available )
const notAvailableUsers = users.filter((user) => !user.available )

console.log(availableUsers)
console.log(notAvailableUsers)


// MAP

const products = [
  {name: 'camisa', price: 10.99, category: 'Roupas'},
  {name: 'chaleira', price: 49.99, category: 'Eletro'},
  {name: 'fogão', price: 400, category: 'Eletro'},
  {name: 'Calça jeans', price: 10.99, category: 'Roupas'},
]

products.map((products) => { // o Map vai alterar a estrutura do array adicionando uma classe para o produtos que tem roupa
  if(products.category === 'Roupas') {
    products.onSale = true
  }
})

console.log(products)

// Template literals

const userName = 'teste'
const age = 30

console.log(`teste nome: ${userName} e idade: ${age}`)


// Destructuring
const fruits = ['maça', 'laranja', 'mamão']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)

const productDestails = {
  name: "mouse",
  price: 40,
  category: "perifericos",
  color: "cinca"
}

const {name} = productDestails // atribuindo name a propriedade name de productDetails

// Spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0, ...a3, 7]

const carName = {name: 'gol'}
const carBrand = {brand: 'vw'}
const otherInfos = {km: 10000, price: 49000}

const car = {...carBrand, ...carBrand, ...otherInfos}

console.log(car)


// Classes
class Products{
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Products('camisa gola V', 20)

console.log(shirt.name)


// Herança
class ProductWithAttributes extends Products {
  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log("As cores são:")
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}

const hat = new ProductWithAttributes("chapeu", 29.99, ["preto", "Azul", "Verde"])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()