# Gerenciador de Enquetes

Este projeto é um **CRUD de Enquetes**, onde os usuários podem criar, ler, atualizar e remover enquetes de forma simples e intuitiva. A aplicação foi desenvolvida utilizando uma arquitetura em camadas, com Nest, React, TypeORM e Postgrees. 

## Tecnologias Utilizadas

### Backend

O backend do projeto foi desenvolvido utilizando o **NestJS**, uma estrutura robusta para construção de aplicações do lado do servidor em Node.js. O NestJS adota o padrão de arquitetura em camadas, onde o código é organizado em **Controllers**, **Services** e **Modules**. 

Além disso, o projeto utiliza o **TypeORM** como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados, permitindo que as operações de leitura e gravação de dados sejam realizadas de forma simples e intuitiva. 

O banco de dados está sendo rodado em Postgrees em um container na porta 5433, além disso é possível fazer a visualização do banco de dados em tempo real por meio do adminer, na porta 8080

### Frontend

O frontend do projeto foi construído com **React** e com uso do **Material-UI** . Para a gestão de requisições HTTP, o **Axios** foi integrado. O projeto foi configurado com **Vite**, uma ferramenta de construção que oferece uma experiência de desenvolvimento rápida e eficiente. É possível acessar o projeto na porta 3001

## Como Rodar o Projeto
1. faça um clone local do repositório
2. rode os seguintes comandos no diretório do projeto 
```bash
cd back
docker-compose up -d
npm install
npm run start:dev
cd ../beuni_crud
npm install
npm run dev
```
3. vá ao navegador na porta 3001
4. divirta-se ? 