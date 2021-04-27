FROM node:latest

COPY . /home/Coyoto-Backend

WORKDIR /home/Coyoto-Backend

ENTRYPOINT npm run dev