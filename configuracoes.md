## Configurações
### Pré-requisitos
Você deve ter instalado em sua máquina o seguinte:
- [node.js](https://nodejs.org/en/download/prebuilt-installer/current)
- [git](https://git-scm.com/downloads)
- Conta na AWS: será necessário credenciais de acesso para utilizar o Amazon Textract

### Passo-a-passo
Primeiro, clone este repositório localmente:

```bash
git clone https://github.com/dtonavitor/paggo-backend.git
```

Depois, navegue até o diretório clonado.

No diretório, crie uma cópia do arquivo [.env.example](https://github.com/dtonavitor/paggo-frontend/blob/master/.env.example) com o nome '.env' e complete-o:
```bash
DATABASE_URL="file:./dev.db"
# hash aleatório (https://www.md5hashgenerator.com/)
JWT_SECRET=
# tempo de vida do token
JWT_EXPIRES_IN=
#credenciais da aws
AWS_ACCESS_KEY_ID=
AWS_SECRET_KEY=
AWS_REGION=
```

Execute os seguintes comandos:

```bash
npm i # instala todas as dependências necessárias

# uma das opções abaixo
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```
#### Testes

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

Pronto! Seu servidor estará rodando em [http://localhost:3001](http://localhost:3001).
