# Modul 169

## About the Project
This is a school project that deals with the topic of Docker. The app itself is a Node.js app that works with HTML, CSS and Javascript. It has a database connection to a MongoDB database. The app is a simple self-developed note app where you can save your notes for later with the purpose to present a Docker devcontainer with a node.js app and a MongoDB database and a couple of other things.

## Start the project
<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/Timonschool/M169_LB_Jakob.git">
  <img 
    src="https://img.shields.io/badge/Open_in-DevContainer-blue?logo=visual-studio-code" 
    alt="Open in DevContainer" 
    height="40"
  >
</a>

To start the project via Docker DevContainer press the button above. The project will install itself with its dependencies. To Start the App with debugging press ``F5`` or go to the ``Run`` Menu in the navigation bar and press ``Start debugging``. Select ``Node.js`` as your debugger. You can also start the project via console with:
```bash
npm start
```

## Database
The database we use is a MongoDB Database. It runs on port 27017.

### Dummy Data
The dummy data gets insertet with the insertDemoContacts.js script. It runs when building the container. If you want to insert dummy data later at any point run:
```bash
node insertDemoContacts.js
```

### Database Tools
We have two tools to work with the mongoDB database: 
#### MongoDB Express
- Open the tool on [localhost:8081](http://localhost:8081)
- Login with Username: ``admin`` and Password: ``pass``
- Maintain your database

#### MongoDB VsCode extension
- Click in the MongoDB Tab on the left side of your VsCode Editor.
- Click in the local mongoDB which runs on ``localhost:27017``
- Maintain your Database

## Extensions
- MongoDB: To maintain your database
- Prettier: To format you Code
- Icons: To have a better overview over your project structure
- Docker: To work with docker
- Color-Info: To better customize your colors in CSS
- W3C-Validator: To validate your HTML and CSS files

### Important
The node image which is used in this devcontainer already comes with some extensions like EsLint for more information go to [DockerHub-Node](https://hub.docker.com/_/microsoft-devcontainers-javascript-node)

## Productive Containers
You can build your Productive Container with the Dockerfile in this project. Keep in mind that your MongoDB Database won't be installed in this produtive container. It will only contain the node.js app without files for docker or github. The .env and deployment files won't be copied either. If you really want to use this app for productive purposes make sure you connect to an external mongoDB Database you configured at another point.

### .env file configuration
To deploy your docker image to docker-hub you need to sign in with your account. For this you need to set your username and password in the .env file, which will be read by the deployment script. For this do the following steps:
1. Copy ``.env.sample``
2. Rename it to ``.env``
3. Set your credentials to the matching variables

### Deploy your productive image on DockerHub
You can deploy your docker image with the existing ``deployment.sh`` script. To run the script open your bash terminal an run the following command:
```bash
./deployment.sh
```

If the access is denied run the following commands:
```bash
chmod +x deployment.sh
```
or
```bash
sudo ./deployment.sh
```
After pushing your image you can find it on [DockerHub](https://hub.docker.com/repositories).

### Important 
To run this deployment script you must be on your local machine and not in your dev-container. You can just pull this project on your machine and run the script with you locally installed bash shell (mostly WSL).


