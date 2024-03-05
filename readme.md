# Email Queue (As a Micro-Service)

Building a server that can handle multiple Emails and Deliver them on respective email address.

## Backend Technologies (Node v20.0.9)

1. Express Framework
2. Typescript
3. BullMQ Library
4. NodeMailer
5. Install Docker Desktop and Start Docker engine

## Steps

install all dependencies
-> npm i

-> docker run --name redisInstance -p 6379:6379 -p 8001:8001 -itd redis/redis-stack

-> load .env at global level

    PORT=4000
    REDIS_PORT=6379
    SMTP_SERVICE=gmail
    URL=127.0.0.1

-> change email credentials inside
src -> utils -> transportEmails.ts -> auth

-> npm start

## Links

Email Api Endpoint :- http://localhost:4000/backend-email-service/email

    Type : POST
    Req.Body : {

    "to":"example@vit.edu.in",
    "subject":"Welcome Mail",
    "body":"Hello From Erp System Administrator",
    "user":"adminuser@gmail.com"

    }
