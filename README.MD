# PROJECT WITH PRISMA AND NODE MORE TS
<center> <h1> PROJECT WITH PRISMA AND NODE MORE TS</h1> </center>

## COMANDS USED

1. npm i typescript -g <!-- instalamos de manera global -->

### dependencies

```
    npm i ts-node -g
    npm i nodemon -g
    tsc --init
    npm init -y
    npm i express cors dotenv multer bcryptjs jsonwebtoken morgan

    Install Prisma

    npx prisma
    npm install prisma --save-dev
    npx prisma init
    npm install @prisma/client


```

### dev dependencies

```

    npm i @types/express @types/cors @types/dotenv @types/multer @types/bcryptjs @types/jsonwebtoken @types/morgan -D

```

#### congigure nodemon ,add dev and path main

```js
"scripts": {
    "dev":"nodemon ./src/server.ts"
  },
```

### docker comands

- para levantar la base de datos de docker si tiene la levanta y si no la descarga

```
    docker-compose up -d
```
  
### prisma comands

```
    npx prisma generate
    npx prisma migrate dev
    npx prisma migrate dev --name init
    npx prisma studio
```

### table plus connect data base

- names: tudotornet
- host: localhost
- port:5432
- user:postgresº
- password:root
