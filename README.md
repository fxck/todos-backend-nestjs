# TODOs backend
Todo app based on [Nest](https://github.com/nestjs/nest) with Mongo DB.

## Description

Backend with CRUD methods. Properties of the `todo`:  
- text: *string*  
- completed: *boolean*
- index: *number*

## Installation

```bash
$ npm install
touch .env
```
In the .env file, paste your Mongo DB url: `DATABASE_URL=your-mongodb-uri`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
