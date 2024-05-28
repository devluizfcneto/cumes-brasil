# API Cumes Brasil 🏞️

API RESTful dedicada ao catálogo digital de vias de escalada do Brasil, proporcionando um meio para acessar, criar, atualizar e deletar informações sobre vias, montanhas, faces de montanha, usuários e croquis.

## Início Rápido

Para iniciar o projeto localmente, siga estas etapas:

1. Clone o repositório:
2. Instale as dependências:
3. Configure as variáveis de ambiente conforme necessário em `.env`.
4. Inicie o servidor:


## Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- SQLite (com planos de migração para um banco de dados mais robusto)
- Swagger para documentação da API

## Arquitetura

A API segue uma arquitetura em camadas, incluindo:

- **Controllers**: Gerenciam as requisições e respostas HTTP.
- **Services**: Contêm a lógica de negócios e chamam os repositories para acesso aos dados.
- **Repositories**: Interagem diretamente com o banco de dados para realizar operações CRUD.
- **Models**: Representam as entidades do domínio e são usadas pelos repositories.

## Endpoints

A seguir, são apresentados os principais endpoints disponíveis na API:

### Vias

- `GET /api/vias`: Retorna todas as vias cadastradas.
- `GET /api/vias/{id}`: Retorna uma via específica pelo ID.
- `POST /api/vias`: Cria uma nova via.
- `PUT /api/vias/{id}`: Atualiza uma via existente.
- `DELETE /api/vias/{id}`: Deleta uma via pelo ID.

### Montanhas

- `GET /api/montanhas`: Lista todas as montanhas.
- `GET /api/montanhas/{id}`: Retorna uma montanha específica pelo ID.
- `POST /api/montanhas`: Cria uma nova montanha.
- `PUT /api/montanhas/{id}`: Atualiza uma montanha existente.
- `DELETE /api/montanhas/{id}`: Deleta uma montanha pelo ID.

### Faces

- `GET /api/faces`: Lista todas as faces de montanha.
- `GET /api/faces/{id}`: Retorna uma Face de montanha específica pelo ID.
- `POST /api/faces`: Cria uma nova Face de montanha.
- `PUT /api/faces/{id}`: Atualiza uma Face de montanha existente.
- `DELETE /api/faces/{id}`: Deleta uma Face de montanha pelo ID.

### Fontes

- `GET /api/fontes`: Lista todas as fontes.
- `GET /api/fontes/{id}`: Retorna uma Fonte específica pelo ID.
- `POST /api/fontes`: Cria uma nova Fonte.
- `PUT /api/fontes/{id}`: Atualiza uma Fonte existente.
- `DELETE /api/fontes/{id}`: Deleta uma Fonte pelo ID.

### Usuários

- `GET /api/usuarios`: Lista todos os usuários.
- `GET /api/usuarios/{id}`: Retorna um usuário específico pelo ID.
- `POST /api/usuarios`: Cria um novo usuário.
- `PUT /api/usuarios/{id}`: Atualiza um usuário existente.
- `DELETE /api/usuarios/{id}`: Deleta um usuário pelo ID.
- `POST /api/usuarios/login`: Autentica um usuário e retorna um token JWT.
- `POST /api/usuarios/logout`: Invalida o token JWT de um usuário autenticado.

### Croquis

- `GET /api/croquis`: Lista todos os croquis.
- `GET /api/croquis/{id}`: Retorna um croqui específico pelo ID.
- `POST /api/croquis`: Cria um novo croqui.
- `PUT /api/croquis/{id}`: Atualiza um croqui existente.
- `DELETE /api/croquis/{id}`: Deleta um croqui pelo ID.


## Documentação da API

Para mais detalhes sobre os endpoints, parâmetros, corpos de requisição e respostas, acesse a documentação Swagger da API em `http://localhost:4200/api-docs`.

## Modelos de Dados

## Modelos de Dados

A API Cumes Brasil organiza informações sobre vias de escalada e elementos relacionados em várias tabelas interconectadas, conforme descrito abaixo:

### `Fonte`
Armazena informações sobre as fontes de dados ou referências para as informações das vias, montanhas, faces, e croquis.

- **id**: Identificador único da Fonte.
- **autor**: Nome do autor ou da entidade que forneceu a informação.
- **referencia**: Detalhes da referência ou como a informação pode ser verificada.

### `montanha`
Representa as montanhas que contêm as vias de escalada.

- **id**: Identificador único da montanha.
- **nome**: Nome da montanha.
- **localizacao**: Localização geográfica da montanha.
- **altura**: Altura da montanha em metros.
- **fonte**: Referência à Fonte das informações da montanha.

### `Face`
Descreve as diferentes faces de uma montanha, onde as vias de escalada estão localizadas.

- **id**: Identificador único da Face.
- **nome**: Nome da Face da montanha.
- **montanha_id**: Referência à montanha à qual a Face pertence.
- **fonte**: Referência à Fonte das informações da Face.

### `Via`
Contém informações sobre as vias de escalada individuais.

- **id**: Identificador único da via.
- **nome**: Nome da via de escalada.
- **grau**, **crux**, **artificial**, **duracao**, **exposicao**, **extensao**: Características técnicas da via, como dificuldade, ponto mais desafiador, se há passagens artificiais, duração estimada, exposição ao risco e extensão total da via.
- **conquistadores**: Informações sobre os escaladores que abriram a via.
- **detalhes**: Outros detalhes relevantes da via.
- **data**: Data de conquista ou abertura da via.
- **montanha_id**: Referência à montanha onde a via está localizada.
- **face_id**: Referência à Face específica da montanha.
- **via_principal_id**: Em caso de vias secundárias, referencia a via principal associada.
- **fonte**: Referência à Fonte das informações da via.

### `Croqui`
Fornece representações gráficas ou croquis das vias de escalada.

- **id**: Identificador único do croqui.
- **nome**: Nome associado ao croqui.
- **imagemUrl**: URL para a Imagem do croqui.
- **autor**: Quem criou o croqui.
- **descricao**: Descrição ou anotações adicionais sobre o croqui.
- **fonte**: Referência à Fonte das informações do croqui.

### `Usuario`
Armazena informações sobre os usuários da plataforma.

- **id**: Identificador único do usuário.
- **nome**: Nome do usuário.
- **email**: Email do usuário, utilizado para login e comunicação.
- **fotoPerfil**: URL para a foto de perfil do usuário.

### Coleções
Gerenciam as coleções criadas pelos usuários, como vias favoritas e escaladas realizadas.

#### `ColecaoBase`
- **id**: Identificador único da coleção.
- **nome**, **descricao**: Nome e descrição da coleção.
- **usuario_id**: Referência ao usuário que criou a coleção.

#### `ColecaoEscaladas`
- **id**: Identificador único da coleção de escaladas.
- **via_id**: Referência às vias incluídas na coleção.
- **data**, **observacao**: Data da escalada e observações adicionais.

#### `ColecaoFavoritos`
- **colecaoBase_id**: Identificador da coleção base associada aos favoritos.

### Relações entre as Tabelas
- **vias_croquis**: Associação muitos-para-muitos entre vias e croquis.
- **vias_colecoes**: Associação muitos-para-muitos entre vias e coleções base.

## Licença

Este projeto está sob a Licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

