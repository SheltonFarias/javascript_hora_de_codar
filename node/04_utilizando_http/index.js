const {createServer} = require('http');

let server = createServer((request ,response) => {

  response.writeHead(200, {"content-Type": "text/html"});
  response.write(`
    <h1>Hello World!</h1>
    <p>Primeira página com Node.js</p>
  `)
  response.end();
})

server.listen(4000)

console.log('http://localhost:4000')