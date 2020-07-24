# Desafio loja de aluguel de livros - React

## Oportunidade

Olá! Temos uma oportunidade de desenvolvedor na Digivox e gostaríamos que você participasse do nosso processo seletivo. Ao fim do processo, você receberá um feedback do nosso time com o resultado. 😃

## Detalhamento do desafio

Criar uma API REST para gerenciamento de uma loja que aluga livros. Através destes serviços a empresa poderá manter o cadastro dos livros, clientes, aluguéis e acompanhar em um dashboard o que está sendo devolvido e alugado em tempo real.

## Serviços a serem criados:

 - Manter livro;
 - Manter cliente;
 - Reservar de livro;
 - Cancelar reserva;
 - Alugar livro;
 - Devolução de livro;
 - Dashboard com informações sobre: 
  - Livros a serem devolvidos no período semanal, com seus valores;
  - Livros alugados no período semanal, com seus valores;

OBS: Para o serviço de reserva, o livro será disponibilizado ao cliente em uma data agendada (ou seja, um agendamento) enquanto no de aluguel do livro ele é disponibilizado no exato momento da solicitação.

## Tecnologias Desejáveis

 - JDK 1.8+;
 - Maven 3.3+;
 - Banco de dados Postgres;
 - Framework Spring Boot;
 - React
 
OBS: Sinta-se à vontade para utilizar outras tecnologias.

## O que avaliaremos

 - Coesão do código-fonte
 - Boas práticas e padrões;
 - Aderência aos serviços solicitados;

## Instruções

1. Após o envio do desafio você terá 5 dias para desenvolver. Seja criativo! Utilize as ferramentas e frameworks ao seu favor.
2. Atualize o README.MD do projeto e detalhe as etapas para que a aplicação execute com sucesso.
3. Após finalizado envie um e-mail para dev-challenges@digivox.com.br, informando onde o projeto está hospedado.

## Get Started

### Banco de Dados

1. Instâncie um cluster do PostgreSQL, instale na máquina ou utilize um contêiner Docker.
2. Instale ou inicie um cliente Postgre, pode ser o de sua preferência. Exemplos: (PgAdmin, Postbird, DBeaver)
3. No cliente Postgres, execute o comando 'CREATE DATABASE rentbook;' (sem aspas)

### Aplicação

1. No diretório de sua preferência, execute no terminal/git bash:

```bash
git clone https://github.com/guigomes94/react-challenge.git
```
2. Abra a pasta back-end: No arquivo application.properties, que você escontrará em src/main/resources, altere o username e password para o da sua máquina, e se criou o banco com outro nome ou em outra porta, altere na url;
Exemplo:
```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/rentbook
spring.datasource.username=postgres
spring.datasource.password=docker
```

3. Start a aplicação pelo Spring Boot se o Maven já tiver concluído o download das dependências, na primeira execução criará as tabelas e já fará o povoamento de algumas. (Código de criação e povoamento está em src/main/resources/db/migration)

Se a aplicação Spring subiu sem erros, podemos agora executar o front-end react.

4. Na pasta front-end, para baixar as dependências do projeto. Execute no terminal:
```bash
yarn ou npm install
```
5. Se o spring estiver rodando na porta padrão 8080 não será necessário mais nenhuma alteração, caso contrário. Em src/services/api.js. atualize a url.

6. Start o app react com o comando:
```bash
yarn start ou npm start
```