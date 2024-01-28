# CLSHOP - NODE JS BACKEND API

## Description

This is the backend API for the CLSHOP project. It is written in Node JS and fully dockerized and typescripted.

### Docker included services

- Node JS (v20.11.0 LTS)
- Postgres (Latest)
- Adminer (Latest)

### Build docker image for development and run it

`bash
docker-compose -f docker-compose.yml up --build
`

### Build docker image for production and run it

`bash
docker-compose -f docker-compose.prod.yml up --build
`

### Docker compose down and remove all images and volumes

`bash
docker-compose down --rmi all --volumes
`
