# GamaLab Squad Paredão - Sistema de Provas

Web app para gerenciamento de provas avaliativas.

## Membros

- [Rafael Sampaio](https://github.com/sampaiorafael) - Tech Lead
- [Lucas Veiga](https://github.com/lucasveigaa) - Front end Developer
- [Júnior Dering](https://github.com/orloke) - Front end Developer
- [André Lima](https://github.com/andresdslima) - Front end Developer
- [Álvaro M Ferreira](https://github.com/alvaroaxsmith) - Back end Developer

## Convenções de desenvolvimento

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Nomeclatura de variaveis/métodos/funções...
  - Cammel case
    - Ex: const async getProductCountById()
- Nomeclatura de branches
  - Feature --> feat/01
  - Hotfix --> hotfix/01
- Nomeclatura de tabelas e colunas
  - Snake case
    - Ex: created_at
- Nomeclatura de componentes  

## Git Flow
![plot](./docs//gitflow//git-flow.drawio.png)

## Tecnologias

### Geral

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Git](https://git-scm.com/)

### Infraestrutura
- [Vercel](https://vercel.com/)
- [Heroku](https://www.heroku.com/)

### Back-end
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Swagger](https://swagger.io/)


### Front-end
- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Smash]()

## Banco de dados
### Diagrama de Entidade Relacionamento
![der](./docs//gitflow//db//der.drawio.png)

## Como rodar o projeto localmente no back-end

### Instalação

Clone o projeto

```bash
$ git clone https://github.com/gamaacademy-labs/assesment-api.git
```

Entre no repositorio

```bash
$ cd assesment-api
```
Instale as dependências

```bash
$ npm install
```
Rode o docker-compose

```bash
$ docker-compose up -d
```
Rode as migrations

```bash
$ npm run setup:dev
```
Rode o projeto

```bash
$ npm run start:dev
```
## Como rodar o projeto localmente no front-end

### Instalação

Clone o projeto

```bash
$ git clone https://github.com/gamaacademy-labs/assesment-web.git
```

Entre no repositorio

```bash
$ cd assesment-web
```
Instale as dependências

```bash
$ npm install
```
Rode o projeto

```bash
$ npm run dev
```