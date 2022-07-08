

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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
Es necesario tener una variable de entorno llamada .env.development, basandose en el archivo env.sample, aparte de crear una bd en postgres cuyo nombre coincida con la variable de entorno DATABASE_NAME dentro de .env.development.  

Una vez creada la bd se procede a ejecutar el proyecto por primera vez.

## Migrations

Una vez ejecutado el proyecto por primera vez, se crearán 2 archivos, ormconfig.json y ormlog.log, éstos sirven como configuracion para crear, ejecutar migraciones, luego de ésto, se debe ejecutar el comando db:migration:run para ejecutar las migraciones ya creadas.
Luego del paso anterior ya tendremos las tablas creadas en la base de datos previamente configurada, en la carpeta llamada inserts se encuentra un archivo con datos de prueba, copiando y ejecutando dicho .sql en el manejador postgres ya tendremos nuestra base de datos completa. 

## End Points

Las rutas configuradas son las siguientes: 
(get) http://localhost:8000/api/flights : Devuelve un arreglo con todos los vuelos existentes en la bd
(post) http://localhost:8000/api/flights/byorigin : Devuelve arreglo conformado por los vuelos cuyos origen y destino coinsidan con los datos del body { origin: string; destination: string }
(swagger) http://localhost:8000/docs : implementacion de swagger


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
