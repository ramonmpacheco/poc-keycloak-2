# poc-keycloak-2
Test Keycloak with earlier version

### WE CAN FIND IT ON
> https://quay.io/repository/keycloak/keycloak

### ADMINISTRATION CONSOLE
> http://localhost:8080/admin/master/console/

### CREATE EXTERNAL NETWORK
> ```docker network create kc```

### INSIDE DOCKER INSTANCE
### CREATE NODE PROJECT INSIDE FOLDER /home/node/app
> ```npm init -y```
>
> ```npm install typescript --save-dev```
>
> ```npx tsc --init```
>
> ```npm install nodemon --save-dev```
>
> ```npm install express```
>
> ```npm install @types/express --save-dev```
>
> ```npm install @types/express-session --save-dev```
>
> ```npm install @types/jsonwebtoken --save-dev```
>
> ```npm install ts-node --save-dev```

### RUN
> ```npm run authorization-code```