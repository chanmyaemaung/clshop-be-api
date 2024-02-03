FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

EXPOSE 8000

CMD ["pnpm", "start:dev"]