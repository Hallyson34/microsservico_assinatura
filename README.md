## Requirements

```
  nodejs
  npm
```

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Acess Swagger after running development

```bash
http://localhost:3000/docs
```


## How to stop process already running in port 3000 on Ubuntu 22.04

```bash
sudo kill -9 `sudo lsof -t -i:3000`
```
