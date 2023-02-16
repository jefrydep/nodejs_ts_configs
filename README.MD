# PROJECT WITH PRISMA AND NODE MORE TS

## COMANDS USED

1. npm i typescript -g  <!-- instalamos de manera global -->


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


```
### dev dependencies
```

    npm i @types/express @types/cors @types/dotenv @types/multer @types/bcryptjs @types/jsonwebtoken @types/morgan -D

```
#### congigure nodemon ,add dev and path main
```js
"scripts": {
    "dev":"nodemon ./src/app.ts"
  },
```

