# O que é REST e RESTful?
- Quando falamos em API estamos condicionados a falar de REST e RESTful também
- REST = Representational State Transfer, princípios e regras que permitem criar uma aplicação com interfaces bem definidas
- RESTful = Capacidade de aplicar os princípios do REST


# REST e os verbos HTTP
- Sempre que criamos um API devemos utilizar os verbos HTTP corretos para cada URL da nossa aplicação
- Verbo GET: para solicitar dados;
- Verbo POST: para inserir dados
- Verbo DELETE: para deletar dados
- Verbo PUT: para atualizar dados

# Express
- Um Framework web, muito utilizado para criar aplicações em Node.js
- Utiliza em seu core o módulo HTTP para criar as comunicações
- Além de outros módulos
- Podemos criar uma API com Express facilmente


# O que são Rotas?
- Nos sites e nas APIs temos o que chamamos de rotas
- Que basicamente a URL que queremos acessar
- Porém quando tratamos de uma API chamamos as URLs de rota
- No express vamos criar as nossas rotas para serem acessadas via HTTP e responderem baseadas numa lógica que inserirmos
- E cada rota vai receber um método HTTP, que deve coincidir com o proposto pelo REST, conforme vimos anteriormente
