FROM ubuntu as intermediate

RUN apt-get update 
RUN apt-get -y upgrade 
RUN apt-get install --assume-yes git

WORKDIR /app
RUN git clone https://github.com/Oguzvuruskaner/boilerplate-drag-and-drop


FROM node:alpine
COPY --from=intermediate /app /app

WORKDIR /app/boilderplate-drag-and-drop

RUN npm install
CMD ["npm","run","start"]

