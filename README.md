# LookAfter

## Ambiente de desenvolvimento 

O ambiente de desenvolvimento consta com suas dependências em containers do Docker. Caso precise instalar o docker na raíz do projeto já tem dois scripts de instalação do Docker e Docker compose para ambientes Linux.

Para utilizar o docker para executar o projeto basta executar o comando abaixo na raíz do projeto
```
$ docker-compose up
```
O Docker irá realizar o download de todas as dependências necessárias e ao final do processo o projeto estará disponível para acesso em **https://localhost:4201**


## Comandos úteis

### server local
Caso não queria usar o Docker para gerenciar as dependências do projeto e já tenha sua máquina configurada com Node e o Angular CLI, poderá usar o comando a seguir para colocar o sistema em funcionamento

```
$ ng server
```

Se tudo ocorrer conforme o esperado poderá acessar o projeto em *https://localhost:4200**

### Testes unitários

```
$ ng test
```
## Processo de deploy e CI/CD

 Atualmente o projeto não conta com integração contínua e deploy contínuo integrado, o processo ainda é manual. Segue abaixo as instruçõe para realizar o deploy no  servidor **Firebase**

 Primeiro precisamos gerar a build dos arquivos, o comando a seguir irá gerar os arquivos e configurar as váriáveis necessárias em modo de produção.

 ```
$ ng build --prod
```

Com os arquivos da build gerados agora será possível realizar o deploy. Primeiro irá precisar logar no firebase, estou levando em consideração que está utilizando o container docker, caso contrário irá precisar instalar a dependência do firebase.

 ```
$ firebase login
```
Será solicitado no terminal que acesse um link para dar permissão da conta, acesse o link. Para finalmente poder executar o deploy

 ```
$ firebase deploy
```


### Pontos de destaque sobre regra de negócios
Algumas das soluções apresentadas aqui foram desenvolvidas pensando na continuidade do desenvolvimento.

- O sistema armazena localmente o token (padrão JWT) de acesso que expira em um determinado período de tempo.
- A API para algumas consultas é necessário passar o token de acesso;
- Criação de módulos de componentes 


### Pontos de Melhoria

O projeto está em desenvolvimento e alguns pontos já foram desenvolvidos pensando na evolução futura.

- Design do dashboard, só existe um card com perfil do usuário;
- Botão de acesso as funções usuário (login e register) apresenta comportamente incostante, não consegui identificar qual a origem, mas é possível usar as funcionalidades perfeitamente;
- Criação de perfis de acesso, atualmente o usuário só tem acesso a rota de dashboard após realizar login. Criar mais rotas de acesso especifica para diferentes perfis.
- Atualizar o token de acesso antes de expirar
- Criar página 404 e configurar
- Criar políticas de branch, como o projeto só contava com um desenvolvedor a práticas de branchs infelizmente não foi utilizada,


## Links de acesso
 
 O projeto está hospedado no firebase e pode ser acessado em 
 
 https://lookafter-frontend.web.app

O projeto ainda conta com backend desenvolvido em Ruby on Rails que deve está funcionando para que o sistema tenha as funções básicas realizadas.
o projeto do backend está hospedado no heroku e pode ser acessado em https://github.com/joaohenriquepda/lookafter-api


# Licença de Software

O projeto se encontra licenciado pela MIT License

**MIT License**

Copyright (c) 2020 João Henrique Pereira de Almeida 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

