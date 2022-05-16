# Job Quest API

## Documentação
Git: https://git-scm.com/doc <br>
Node.js: https://nodejs.org/en/docs/ <br>
KnexJS: http://knexjs.org/ <br>

## Pré-requisitos
Git: https://git-scm.com/ <br>
Node.js: https://nodejs.org/en/ <br>
MySQL: https://www.mysql.com/ <br>

## Banco de Dados
schema: job_quest  <br>
usuario: root  <br>
senha: (sem senha)  <br>

```
Caso ja tenha um banco mysql configurado com alguma senha,
ajuste no arquivo knexfile.js a mesma. Ou se quiser pode
trocar a senha root do seu mysql local para nenhuma com os comandos abaixo:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
flush privileges;
```

## Instalação
```
git clone https://tools.ages.pucrs.br/job-quest/api
cd API
git checkout dev
npm install
npm start
```

## Scripts BD
```
migrations e seeds estão inclusos no projeto, utilize:

npx knex migrate:latest -> irá gerar as tabelas
npx knex seed:run -> rodar os inserts tabelas

para dropar as tabelas, caso necessário, utilize:
npx knex migrate:down -> irá remover as tabelas

O projeto também contem os scripts para rodar manualmente:
database/banco.sql
```

## Documentação do projeto
Você pode acessar todas as apis do projeto através do swagger.
Local: (http://localhost:4000/api-docs)


## Requests (deprecated)
```
Todas as requests devem estar inclusas no arquivo
job_quest.postman_collection.json na raiz do projeto.
Instale o postman: https://www.postman.com/
Importe a coleção para dentro do postman para utilizar
e adicionar chamadas.
```
