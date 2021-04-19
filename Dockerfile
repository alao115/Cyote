FROM node:latest

COPY . /home/Coyoto-App

WORKDIR /home/Coyoto-App

ENTRYPOINT npm run dev