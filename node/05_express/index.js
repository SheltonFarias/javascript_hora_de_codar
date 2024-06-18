// criar Rota com express para restornar uma mensagem para confirmar Rota
let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('primeira rota com express')
})

app.get('/teste', (req, res) => {
  res.send('<h1>Teste feito na API</h1>')
})

app.listen(7000, () => {
  console.log('http://localhost:7000 Servidor ON!')
})
