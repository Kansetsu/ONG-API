# ONG-API ✝️

### Proposta 📝: 

- API com as funcionalidades do sistema de cadastro para uma ONG. 
- Interação com o banco de dados para cadastrar as informações dos acolhidos.
- Resgate e busca de informações do banco de dados.
- Entrega e tratamento dos dados guardados no banco. 

### Tecnologias 🌎: 

- Documentada com Swagger UI.
- Utilizando Javascript no NodeJS.
- Banco de dados MongoDB.
- API REST com Express.
- Testes unitários com Jest.

## Documentação 📃:

### Instalem as dependências antes de iniciar a API. 
```javascript  
npm install 
``` 
ou 
```javascript  
npm i 
``` 
#### Obs.: O link de conexão com o banco de dados está registrado em um `.env`, então é necessária a criação do arquivo e adicionar a variável *URL + o link de conexão com o banco de dados.*
```javascript  
//exemplo de link de conexão:

URL="mongodb://localhost:0000/suaCollection"

//por padrão a URL de testes é: 

URL="mongodb://localhost:27017/ONG"
``` 
### Após instalar as dependências, a documentação ficará visível na rota http://localhost:3333/ong/doc/ ao executar a API com o comando:
```javascript  
npm start 
``` 
## Rotas 🌐:

## Acolhidos 🙎‍♂️

### POST 🟩
#### **Cadastrar Acolhidos** : http://localhost:3333/ong/cadastrarAcolhido 
![Post-img](https://images2.imgbox.com/87/ba/kU62fbEd_o.png)
- Recebe um `json` para inserção dos dados. Dentro da aplicação recebe um objeto javascript que é convertido automaticamente para `json`
- Cadastra os acolhidos com as informações fornecidas. Por padrão o `schema` passado é: 
```javascript  
 {
        nomeCompleto: { type: String },
        nomeDaMae: { type: String },
        nomeDoPai: { type: String },
        naturalidade: { type: String },
        nacionalidade: { type: String },
        idade: { type: Number },
        dataDeNascimento: { type: String },
        estadoCivil: { type: String },
        raca: { type: String },
        escolaridade: { type: String },
        profissao: { type: String },
        CPF: { type: String },
        sexo: { type: String },
        RG: { type: String },
        estadoEmissor: { type: String },
        dataDeEmissaoRG: { type: String },
        orgaoEmissor: { type: String },
        CEP: { type: String },
        endereco: { type: String },
        estado: { type: String },
        municipio: { type: String },
        bairro: { type: String },
        unidadeDeOrigem: { type: String },
        numeroDeInternacoes: { type: Number },
        contatoDeEmergencia1: { type: String },
        contatoDeEmergencia2: { type: String },
        dataDeSaida: { type: String },
        matricula: { type: String },
 }
``` 

### GET 🟦
#### **Retorna todos os acolhidos cadastrados**: http://localhost:3333/ong/todosOsAcolhidos
![GetAll-img](https://images2.imgbox.com/15/63/bUa4ef8q_o.png)
- Retorna todos os acolhidos que estiverem cadastrados no banco de dados. Retorna um `json` que é convertido para um objeto Javascript como no exemplo abaixo: 
```javascript  
        {
            nomeCompleto: "Quentin Tarantino",
            nomeDaMae: "Patrícia Amorim",
            nomeDoPai: "João Planaltina",
            naturalidade: "Brasileiro",
            nacionalidade: "Brasileiro",
            idade: 59,
            dataDeNascimento: "05-05-2022",
            estadoCivil: "Solteiro",
            raca: "Branco",
            escolaridade: "Superior Completo",
            profissao: "Diretor de Cinema",
            CPF: "123.456.789-10",
            sexo: "Masculino",
            RG: "12.345.678",
            estadoEmissor: "PE",
            dataDeEmissaoRG: "05-05-2022",
            orgaoEmissor: "SDS",
            CEP: "52091-240",
            endereco: "Rua Córrego do boleiro, 221",
            estado: "PE",
            municipio: "Recife",
            bairro: "Nova Descoberta",
            unidadeDeOrigem: "Recife Centro",
            numeroDeInternacoes: 0,
            contatoDeEmergencia1: "81 98726-7365",
            contatoDeEmergencia2: "81 98342-6557",
            dataDeSaida: "06-05-2022",
            matricula: "02307485"
        } 
``` 
#### **Retorna um acolhido cadastrado, localizando ele por sua matrícula:** http://localhost:3333/ong/acolhidosPorMatricula
-  O retorno é similar ao da rota anterior, porém retorna apenas o objeto que tiver a mesma matrícula solicitada.
![GetAcolhido-img](https://images2.imgbox.com/53/61/keY1FjSS_o.png)
#### **Retorna os acolhidos cadastrados, localizando eles pela sua unidade:** http://localhost:3333/ong/acolhidosPorUnidade
-  Funciona como a rota anterior, alterando apenas o parâmetro utilizado para buscar os acolhidos. Essa rota retorna todos os que tiverem a unidade solicitada, não apenas um.
![GetUnidade-Img](https://images2.imgbox.com/2c/57/LazcELm8_o.png)
### DELETE 🟥
#### **Deletar Acolhidos** : http://localhost:3333/ong/deletarAcolhido
![Delete-Img](https://images2.imgbox.com/1d/9e/HLkEDstj_o.png)
- Remove um acolhido do banco de dados, localizando ele com sua matrícula. Essa rota retorna um `json` com duas informações. Se o objeto foi reconhecido na busca, que retorna `true` para localizado e `false` para não localizado, e retorna também um contador informando se ele foi deletado ou não, sendo `0` para não deletado e `1` para deletado. 
```javascript
{
  "acknowledged": true,
  "deletedCount": 1
}
```

### PUT 🟨
#### **Atualizar informações do acolhido** : http://localhost:3333/ong/atualizarAcolhido/:matricula
![Update-Img](https://images2.imgbox.com/5c/ac/GaRR6q3v_o.png)
- Atualiza as informações do acolhido. Localizando ele através de sua matrícula e passando os dados a serem atualizados. Similar ao cadastro, porém precisando localizar o acolhido. 

## Credenciais 🔑

### POST 🟩
#### **Cadastrar credencial** : http://localhost:3333/ong/cadastrarAcesso
![Post-img](https://images2.imgbox.com/ca/04/lOBORy0k_o.png)


- Recebe um `json` para inserção dos dados. Dentro da aplicação recebe um objeto javascript que é convertido automaticamente para `json`
- A senha é convertida em um hash ao ser adicionada no banco de dados por questões de segurança. Também é adicionado um `salt` para ser feita a validação do usuário.
- Cadastra a credencial com as informações fornecidas. Por padrão o `schema` passado é: 
```javascript
{
    nome: { type: String },
    sobrenome: {type: String},
    login: { type: String },
    counter: { type: String },
    nice: { type: String },
    usuario: { type: String }
}
```

#### **Validar credencial** : http://localhost:3333/ong/validarAcesso
![Post-img](https://images2.imgbox.com/de/b8/Fx36QX7u_o.png)

- Recebe o login e a senha passada pelo usuário e faz a validação se está correto retornando ```{ valido: true }``` caso a credencial esteja correta ou ```{ valido: false }``` para incorreta.

### GET 🟦
#### **Retorna todas as credenciais cadastradas**: http://localhost:3333/ong/buscarTodosOsCadastros
![GetAll-img](https://images2.imgbox.com/f2/78/VXNa20hN_o.png)
- Retorna todos as credenciais que estiverem cadastrados no banco de dados. Retorna um `json` que é convertido para um objeto Javascript como no exemplo abaixo: 
```javascript 
  {
    "_id": "6279aec91b46b81e0cc833bb",
    "nome": "Valentina",
    "sobrenome": "Silva",
    "login": "01304487",
    "counter": "4979189bf1bbd213811ada6a0a0200dd",
    "nice": "ea1be29bdad9c0c7f7b0ef799ef1e815",
    "admin": true,
    "__v": 0
  },
  {
    "_id": "6279b962ea03d60bb3c03858",
    "nome": "Jacinto",
    "sobrenome": "Aquino",
    "login": "01308679",
    "counter": "c3b113b616059b5bb466a0bbc251147f",
    "nice": "2d05f365c5544cfb74c22ed45e7ae4d4",
    "admin": true,
    "__v": 0
  }
```
#### **Retorna uma credencial cadastrada, localizando-a por seu login:** http://localhost:3333/ong/buscarCadastro
-  O retorno é similar ao da rota anterior, porém retorna apenas o objeto que tiver a mesma matrícula solicitada.
![GetAcolhido-img](https://images2.imgbox.com/a4/b8/DUDxMSDv_o.png)

### DELETE 🟥
#### **Deletar Credencial** : http://localhost:3333/ong/deletarCadastro
![Delete-Img](https://images2.imgbox.com/49/14/z5cXKtSg_o.png)
- Remove uma credencial do banco de dados, localizando-a com seu login. Essa rota retorna um `json` com duas informações. Se o objeto foi reconhecido na busca, que retorna `true` para localizado e `false` para não localizado, e retorna também um contador informando se ele foi deletado ou não, sendo `0` para não deletado e `1` para deletado. 
```javascript
{
  "acknowledged": true,
  "deletedCount": 1
}
```
### PUT 🟨
#### **Atualizar informações do acolhido** : http://localhost:3333/ong/atualizarSenha/:login
![Update-Img](https://images2.imgbox.com/17/1a/i8ucOJ5T_o.png)
- Atualiza as informações de uma credencial. Localizando-a através de seu login e passando os dados a serem atualizados. Similar ao cadastro, porém precisando localizar a credencial. 

### Suporte 🆘

#### Em casos de dúvidas ou sugestôes entrar em contato com o time exódia através do nosso [email](mailto:storeexodia@gmail.com)!
