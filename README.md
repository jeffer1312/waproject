# WaProject



## Recursos utilizados no desenvolvimento:

- Node.Js;
- Nest.Js;
- mysql;
- prisma;
- PostMan (testar a API criada);

## Testando a Aplicação no Postman:

Caso queira testar as API' criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

  ROTA                        |     HTTP(Verbo)   |      Descrição             | 
-------------------------     | ----------------- | ---------------------      | 
/plans                        |       GET         | Selecionar Todos Planos    | 
/plans                        |       POST        | Cadastrar plano            | 
/plans/:plan_id               |       PUT         | Atualizar plano            | 
/plans/:plan_id               |       DELETE      | Deletar plano              | 
/subscribers                  |       GET         | Selecionar Todos Inscritos | 
/subscribers                  |       POST        | Cadastrar Inscrito         | 
/subscribers/:subscriber_id   |       PUT         | Atualizar Inscrito         | 
/subscribers/:subscriber_id   |       DELETE      | Deletar Inscrito           | 
/order                        |       GET         | Selecionar Todos Pedidos   | 
/order                        |       POST        | Cadastrar plano Pedido     | 
/order/:order_id              |       PUT         | Atualizar plano Pedido     | 
/order/:order_id              |       DELETE      | Deletar plano Pedido       | 



## Executar Localmente

para executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MYSQL**: Utilizei docker pra rodar o MYSQL
* **Docker**: Caso não tenha, basta realizar o download [Aqui](https://www.docker.com/get-started/)

_Note_:Caso nao queira utilizar docker e ja tenha instalado o banco de dados mysql troque as variaveis do arquivo .env pra conectar com o seu banco

criar banco de dados Mysql usando docker:
_Note_: se quiser mude MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER e MYSQL_ROOT_PASSWORD.

```bash
docker run --name waprojectDb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=waproject  --restart always -p 3306:3306 -d mysql:latest 
```

instalar as dependências do backend, rodar migrations:

```bash
cd ../backend
yarn install
npx prisma migrate dev 
```

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
yarn start:dev
```
Caso o tudo tenha ocorrido normalmente em sua máquina, ele iniciará o serviço mostrando que a port 3333 foi iniciada.

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o Frontend. Basta digitar na tela do cmd o seguinte comando:

```
cd ../frontend
yarn install
yarn start
```

Agora, abre a página da aplicação backend em `http://localhost:3333`. E pronto a aplicação será executada de maneira local na sua máquina.        
Agora, abre a página da aplicação frontend em `http://localhost:3000`. E pronto a aplicação será executada de maneira local na sua máquina.   



×
×
×
