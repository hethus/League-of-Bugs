# League of Bugs

## - Descrição -

League of Bugs (LoB) é um projeto desenvolvido para o modulo 4 da Blue com base no jogo League of Legends!

Ainda em desenvolvimento (quarta semana).

### Como fazer o clone do projeto:

```bash
$ git clone https://github.com/hethus/League-of-Bugs.git
```

### Como instalar as dependências do projeto:

```bash
$ npm install
```

### Diagrama do banco de dados:

```bash
$ npx prisma db push
$ npx prisma generate
```

Será criado um arquivo 'db.pdf' com todo o diagrama do banco de dados!


### Como executar o projeto:

```bash
# produção:
$ npm run start

# desenvolvimento:
$ npm run start:dev
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
ou para acessar o deploy do projeto:

```bash
  https://league-of-bugs-production.up.railway.app

  ou

  https://league-of-bugs-production.up.railway.app/docs
```

OBS: rotas com a tag (adm) precisam de autenticação de usuário com o privilegio de administrador. Próximas verificações serão adicionadas quando o front-end for implementado.
