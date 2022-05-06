# Cristolândia-API ✝️

### Proposta 📝: 

- API com as funcionalidades do sistema de cadastro da ONG Cristolândia. 
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
#### Obs.: O link de conexão com o banco de dados está registrado em um ```.env```, então é necessária a criação do arquivo e adicionar a variável *URL + o link de conexão com o banco de dados.*
```javascript  
//exemplo de link de conexão:

URL: "mongodb://localhost:0000/suaCollection"
``` 
### Após instalar as dependências, a documentação ficará visível na rota http://localhost:3333/cristolandia/doc/ ao executar a API com o comando:
```javascript  
npm start 
``` 
## Rotas 🌐: 
### POST 🟩
#### **Cadastrar Acolhidos** : http://localhost:3333/cristolandia/cadastrarAcolhido 
![Post-img](https://images2.imgbox.com/87/ba/kU62fbEd_o.png)
- Cadastra os acolhidos com as informações fornecidas. Por padrão o ```schema``` passado é: 
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
#### **Retorna todos os acolhidos cadastrados**: http://localhost:3333/cristolandia/todosOsAcolhidos
![GetAll-img](https://images2.imgbox.com/15/63/bUa4ef8q_o.png)
- Retorna todos os acolhidos que estiverem cadastrados no banco de dados. Retorna um `json` que é convertido para um objeto Javascript como no exemplo abaixo: 
```javascript  
     CadastroDoAcolhido: {
            nomeCompleto: "Quentin Tarantino ",
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
#### **Retorna os acolhidos cadastrados, localizando eles por sua matrícula:** http://localhost:3333/cristolandia/acolhidosPorMatricula
-  O retorno é similar ao da rota anterior.
![GetAcolhido-img](https://images2.imgbox.com/53/61/keY1FjSS_o.png)
#### **Retorna os acolhidos cadastrados, localizando eles pela sua unidade:** http://localhost:3333/cristolandia/acolhidosPorUnidade
-  Funciona como a rota anterior, alterando apenas o parâmetro utilizado para buscar os acolhidos.
![GetUnidade-Img](https://images2.imgbox.com/2c/57/LazcELm8_o.png)
### DELETE 🟥
#### **Deletar Acolhidos** : http://localhost:3333/cristolandia/deletarAcolhido
![Delete-Img](https://images2.imgbox.com/1d/9e/HLkEDstj_o.png)
- Remove um acolhido do banco de dados, localizando ele com sua matrícula. Essa rota retorna um `json` com duas informações. Se o objeto foi reconhecido na busca, que retorna `true` para localizado e `false` para não localizado. Retorna também um contador informando se ele foi deletado ou não, sendo `0` para não deletado e `1` para deletado. 
```javascript
{
  "acknowledged": true,
  "deletedCount": 1
}
```

### PUT 🟨
#### **Atualizar informações do acolhido** : http://localhost:3333/cristolandia/atualizarAcolhido
![Update-Img](https://images2.imgbox.com/5c/ac/GaRR6q3v_o.png)
- Atualiza as informações do acolhido. Localizando ele através de sua matrícula e passando os dados a serem atualizados. Similar ao cadastro, porém precisando localizar o acolhido. 

### Suporte 🆘

#### Em casos de dúvidas ou sugestôes entrar em contato com o time exódia através do nosso [email](mailto:storeexodia@gmail.com)!
