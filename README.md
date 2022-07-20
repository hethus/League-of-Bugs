# League of Bugs

## - Descrição -

League of Bugs (LoB) é um projeto desenvolvido para o modulo 4 da Blue com base no jogo League of Legends!

Desenvolvemos ele com o intuito de aprender os conceitos para trabalhar com Nest.js + Prisma.

Trabalhamos também com conceitos de autenticação, filtragem de buscas, documentação de projetos e bancos de dados relacionais.

## Pré-requisitos

- **Node** com versão superior ou igual que 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
- **NPM** com versão superior ou igual que 8.5.5 - [Npm Download](https://www.npmjs.com/package/download)
- **Nest.js** com versão superior ou igual que 8.5.5 - [Nest Download](https://docs.nestjs.com/)
- **PostgreSQL** com versão superior ou igual que 8.2.6 - [PostgreSQL Download](https://www.postgresql.org/download/)

### Como fazer o clone do projeto:

```bash
$ git clone https://github.com/hethus/League-of-Bugs.git
```

### Como instalar as dependências do projeto:

```bash
$ npm install
```

### Diagrama de Relacionamento de Entidades:

```bash
$ npx prisma db push
$ npx prisma generate
```

Será criado um arquivo 'db.pdf' atualizado com todo o Diagrama de Relacionamento de Entidades!

ou

<a href="./db.pdf" download>Você também pode analisar nosso Diagrama de Relacionamento de Entidades clicando aqui</a>.


### Como executar o projeto:

```bash
# produção:
$ npm run start

# desenvolvimento:
$ npm run start:dev
```

Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.
```md
DATABASE_URL="postgresql://postgres:SUASENHA@localhost:5432/leagueofbugs"
```
### Como acessar o projeto:

acessando no navegador ou em algum programa como Postman ou Insomnia:

```bash
  localhost:8000
```
ou para acessar a documentação:

```bash
  localhost:8000/docs
```
ou para acessar o deploy do projeto clique [aqui](https://league-of-bugs-production.up.railway.app/docs) ou acesse:

```bash
  https://league-of-bugs-production.up.railway.app

  ou

  https://league-of-bugs-production.up.railway.app/docs
```

OBS: rotas com a tag (adm) precisam de autenticação de usuário com o privilegio de administrador. Próximas verificações serão adicionadas quando o front-end for implementado.

## Autores

- Giovanne Berteli Comba - Turma C13

## Contribuição

Sinta-se a vontade para entrar em contato comigo caso tenha qualquer sugestão de melhoria no projeto

<div>
<a href="https://www.linkedin.com/in/giovanne-berteli-comba-0935bb230/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href = "mailto:joebcomba@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>

## Licença

- MIT License (MIT)
