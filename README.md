# Cristolândia-API ✝️

### Proposta 📝: 

- API com as funcionalidades do sistema de cadastro da cristolândia. 
- Interação com o banco de dados para cadastrar as informações dos acolhidos.
- Resgate e busca de informações do banco de dados.
- Entrega e tratamento dos dados guardados no banco. 

### Tecnologias 🌎: 

- Documentada com Swagger UI.
- Utilizando Javascript.
- Banco de dados MongoDB.
- API REST com Express.


## Documentação 📃:

### Ela ficará visível na rota http://localhost:3333/cristolandia/doc/ ao executar a API 💾
```javascript  
npm start 
``` 
## Rotas 🌐: 
### POST 🟩
#### **Cadastrar Acolhidos** : http://localhost:3333/cristolandia/cadastrarAcolhido 
- Cadastra os acolhidos com as informações fornecidas. Por padrão o schema passado é: 
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
- Retorna todos os acolhidos que estiverem cadastrados no banco de dados. Retorna um objeto Javascript como no exemplo abaixo: 
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
#### **Retorna os acolhidos cadastrados localizando eles por sua matrícula:** http://localhost:3333/cristolandia/acolhidosPorMatricula
-  O retorno é similar ao da rota anterior.
#### **Retorna os acolhidos cadastrados localizando eles pela sua unidade:** http://localhost:3333/cristolandia/acolhidosPorUnidade
-  Funciona como a rota anterior, alterando apenas o parâmetro utilizado para buscar os acolhidos.

### DELETE 🟥
#### **Deletar Acolhidos** : http://localhost:3333/cristolandia/deletarAcolhido
- Remove um acolhido do banco de dados, localizando ele com sua matrícula. Essa rota retorna um json com duas informaçõe. Se o objeto foi reconhecido na busca, que retorna `true` para localizado e `false` para não localizado. Retorna também um contador informando se ele foi deletado ou não. 
```javascript
{
  "acknowledged": true,
  "deletedCount": 1
}
```
### PUT 🟨
#### **Atualizar informações do acolhido** : http://localhost:3333/cristolandia/atualizarAcolhido
- Atualiza as informações do acolhido. Localizando ele através de sua matrícula e passando os dados a serem atualizados. Similar ao cadastro, porém precisando localizar o acolhido. 
