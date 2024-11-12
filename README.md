<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Pokedex

Pokedex is a web application built with NestJS that allows users to browse and search for Pokémon. It uses a MongoDB
database to store Pokémon data and serves static files for the frontend.

## Development

1. Clone the repository

```bash
git clone https://github.com/DavidApril/Pokedex.git
```

2. Install dependencies

```bash
npm install
```

3. have NestJS CLI installed globally

```bash
npm install -g @nestjs/cli
```

4. clone the ```.env.template``` file and rename it to ```.env```

```bash
cp .env.template .env
```

5. set the environment variables in new ```.env``` file


6. up the MongoDB database

```bash
docker-compose up -d
```

7. start the server in development mode

```bash
npm run start:dev
```


8. for rebuid the database request to the following endpoint

```
localhost:3000/api/seed
```


## Stack

* [MongoDB](https://www.mongodb.com/)
* [NestJS](https://nestjs.com/)