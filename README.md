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

4. up the MongoDB database

```bash
docker-compose up -d
```

5. for rebuid the database request to the following endpoint

```
localhost:3000/api/seed
```
## Stack

* [MongoDB](https://www.mongodb.com/)
* [NestJS](https://nestjs.com/)