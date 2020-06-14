<h1 align="center">
<img alt="Ecoleta" src="web/src/assets/logo.svg" height="'130" width="200px">
</h1>

<h4 align="center">
  🚀 Next Level Week #01
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/andersonheinz/react-nextlevelweek01-rocketseat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andersonheinz/react-nextlevelweek01-rocketseat">

  <a href="https://github.com/andersonheinz/react-nextlevelweek01-rocketseat/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andersonheinz/react-nextlevelweek01-rocketseat">
  </a>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-red">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#octocat-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-web-demo">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#anger-pr%C3%A9-requisitos">Pré Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-instala%C3%A7%C3%A3o">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## :octocat: Projeto

Ecoleta é um projeto que possibilita cadastrar no painel web pontos de coletas de materiais: pilhas, baterias, papel, papelão, óleo de cozinha, lâmpadas, resíduos eletrônicos, resíduos orgânicos. No app é possível visualizar os pontos de coleta, filtrando por UF, cidade e tipos dos produtos, após encontrar o ponto de coleta é possível entrar em contato via email ou whatsapp para agendar a coleta.

## 💻 Web Demo

![](/img/index.png)

![](/img/create-point.png)

## 📱 App Demo

![](/img/app.png)

## :anger: Pré-requisitos:

- Git instalado para clonar o projeto.
- Instalar o expo no dispositivo móvel.
- Instalar o docker e docker-compose com permissões à nível de usuário. -[non-root user](https://docs.docker.com/engine/install/linux-postinstall/)

### Verificar instalação/ versões utilizadas

No momento que foi criado esse projeto, essas são as versões do ambiente:

```sh
node = v12.16.1
npm = 6.13.4
nodejs = v10.19.0
yarn = 1.22.4
react-native = 2.0.1
expo = 3.21.5
docker = 19.03.10
docker-compose = 1.21.2

```

## :wrench: Instalação

### Instalação Expo

Instalar o expo no dispositivo móvel:

- [Expo Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)

### Linux:

```sh
$ chmod +x run-app-docker-compose.sh
$ ./run-app-docker-compose.sh
```

### Executar aplicação Mobile

Abrir o app do Expo instalado no dispositivo móvel, escanear o QR Code que vai aparecer no terminal, e estará pronto para uso.

#### Verificar se os backend e frontend estão funcionando.

Listar o JSON dos items cadastrados
http://localhost:3333/items

Página index da aplicação web
http://localhost:3000/

> Também é possível executar com o IP local do container, para que o navegador tenha acesso à localização, é necessário definir a origem como seguro, no chrome acessar: chrome://flags/#unsafely-treat-insecure-origin-as-secure
> Habilitar Insecure origins treated as secure
> Adicionar o ip http://172.28.0.3:3000
> Salve e reinicie o chrome

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
