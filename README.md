# Cypress API Project

Projeto de automação de testes de API utilizando Cypress e JavaScript para validação dos endpoints da API pública ServeRest.

## Objetivo

Demonstrar boas práticas de automação de testes de API utilizando:

* Cypress
* JavaScript
* Service Layer Pattern
* Fixtures
* Dados dinâmicos com Faker
* Validação de contrato com AJV
* ESLint
* GitHub Actions
* Mochawesome Report

## Estrutura do Projeto

```text
cypress/
├───e2e
│   └───api
│           login.cy.js
│           user.cy.js        
├───fixtures
│       login.json
│       user.json               
├───schemas
│       createUserSchema.js    
├───support
│   │   e2e.js 
│   └───api
│           loginService.js
│           userService.js       
└───utils
        dataGenerator.js
        schemaValidator.js
```

## Cenários Automatizados

### Login

* Login realizado com sucesso / Should login successfully
* Login com credenciais inválidas / Should not login with invalid credentials

### Usuários

* Cadastro de usuário com sucesso / Should create user successfully
* Validação de contrato da resposta utilizando AJV

## Pré-requisitos

* Node.js 24+
* NPM

## Instalação

Instalar as dependências:

```bash
npm install
```

## Execução dos Testes

Executar todos os testes:

```bash
npx cypress run
```

Abrir interface do Cypress:

```bash
npx cypress open
```

## Qualidade de Código

Executar análise estática com ESLint:

```bash
npm run lint
```

## Relatórios

Os testes utilizam Mochawesome para geração de relatórios.

Os relatórios são gerados em:

```text
cypress/reports
```

## Integração Contínua

O projeto possui pipeline configurada no GitHub Actions para:

* Instalação de dependências
* Execução do ESLint
* Execução dos testes automatizados
* Publicação dos artefatos de relatório

## API Utilizada

ServeRest

https://serverest.dev
