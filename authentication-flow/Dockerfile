FROM node:19.0-slim

WORKDIR /home/node/app

RUN apt-get update && apt-get install -y curl iputils-ping

USER node

CMD [ "tail", "-f", "/dev/null" ]