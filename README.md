## Sobre o projeto
DSVendas é uma aplicação WEB usando Java com Spring Boot no Back-End e TypeScript com ReactJS no Front-End. Desenvolvido na 3ª edição da **Semana DevSuperior**, organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Link de acesso: https://dudu-dev-dashboard.netlify.app/

O sistema consiste em um levantamento sobre as vendas realizadas por determinados vendedores. 
Os dados são armazenados no banco de dados relacional Postgres, depois são listados no App Web, 
que também apresenta um dashboard com belos gráficos com base nestes dados.


### Layout Web

![Página Home](https://github.com/dududueedu/springBootProject/blob/master/frontend/src/assets/img/home-page.png)

![Página Dashboard](https://github.com/dududueedu/springBootProject/blob/master/frontend/src/assets/img/dashboard-page.png)

### Modelo conceitual

![Modelo Conceitual](https://github.com/dududueedu/springBootProject/blob/master/frontend/src/assets/img/modelo-conceitual.png)

### Padrão camadas

![Padrão Camadas](https://github.com/dududueedu/springBootProject/blob/master/frontend/src/assets/img/camadas.png)

## Tecnologias utilizadas

### Backend

- Java
- Spring Boot
- JPA / Hibernate
- H2
- Web
- Postgres
- Maven
- Security

### Frontend

- HTML / CSS / JS / TypeScript
- ReactJS
- Bootstrap
- Apex Charts
- Axios
- React Router DOM
- React Hooks
- Componentes
- Props
- Estado

### Implantação em produção

- Back-End: Heroku
- Front-End web: Netlify
- Banco de dados: PostgreSQL

## Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/dududueedu/springBootProject.git
```

### Back-End

Pré-requisitos: Java 11

```bash
# entrar na pasta do projeto backend
cd backend

# executar o projeto
./mvnw spring-boot:run
```

### Front-End

Pré-requisitos: npm / yarn

```bash
# entrar na pasta do projeto frontend
cd frontend

# instalar dependências
yarn install

# executar o projeto
yarn start
```

## Autor

Eduardo da Silva Gomes
