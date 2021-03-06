# omnistack11-backend

<p align="center">
<img src="https://github.com/moromisato/omnistack11-frontend-reactjs/blob/master/src/assets/logo.svg" width="150" heigh="93" />
<br>
Projeto criado durante a semana oministack 11
</p>

A semana omnistack é um curso gratuito de uma semana que envolve a criação de uma aplicação completa desde o <i>backend</i> até o <i>frontend</i> e <i>mobile</i>.
Cada semana omnistack possui um projeto diferente, na 11ª versão da semana o projeto proposto é um gerenciador de incidentes para ongs, onde as ongs podem se cadastrar e adicionar seus incidentes que precisam de algum tipo de levantamento de verbas,
assim, os usuários do app <i>mobile</i> podem visualizar esses incidentes e ajudar as ongs entrando em contato com elas para realizar a doação de algum valor.

Este repositório contém o <i>backend</i> da aplicação, feito em NodeJs e utiliza as seguintes bibliotecas:

  * <a href="https://expressjs.com/pt-br/"><i>Express</i></a>
  * <a href="http://knexjs.org/"><i>Knex</i></a> com SQlite.
  * <a href="https://jestjs.io/"><i>Jest</i></a> para realizar testes de integração e unitários
  * <a href="https://github.com/visionmedia/supertest"><i>Supertest</i></a> para auxiliar nos testes de integração que envolvem requisições http

# Rodando o projeto

Primeiro após clonar ou baixar o projeto é necessário instalar as dependências:
<br><i>npm install</i>

Após isso é necessário iniciar o servidor:
<br><i>npm start</i>

Após isso o servidor estará pronto para receber acesso aos seus <i>endpoints</i>

# Endpoints disponíveis

Após inicializar o servidor será possível visualizar no console o endereço local e a porta que o mesmo estará usando, no caso será o localhost:3333. Para fins de teste é possível acessar os <i>endpoints</i> por meio do <a href="https://insomnia.rest/"><i>Insomnia</i></a> ou por qualquer outro <i>software</i> para testar apis rest.

## Cadastro de ongs

<b>http://localhost:3333/ongs</b>
<br>Utilizando método <b>POST</b> e passando o seguinte <i>body</i>

```javascript
{
	"name": "nome da ong",
	"email": "contato@ong.com.br",
	"whatsapp": "999999999",
	"city": "cidade",
	"uf": "SP"
}
```

## Listagem de ongs

Para listar as ongs cadastradas utiliza-se o mesmo endpoint anterior porém agora com método GET e sem body.
<b>http://localhost:3333/ongs</b>

## Cadastro de incidentes

<b>http://localhost:3333/incidents</b>
<br>Utilizando método <b>POST</b> e passando o seguinte *body*

```javascript
{
	"title": "Caso 1",
	"description": "Detalhes do caso",
	"value": 120
}
```

## Listagem dos casos

Para listar os casos cadastrados utiliza-se o mesmo endpoint anterior porém agora com método GET e sem body.
<b>http://localhost:3333/incidents</b>
