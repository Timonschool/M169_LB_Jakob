# Modul 169

## About the Project
Dies ist ein Schulprojekt, das sich mit dem Thema Docker beschäftigt. Die Anwendung selbst ist eine Node.js-App, die mit HTML, CSS und JavaScript arbeitet. Sie hat eine Datenbankverbindung zu einer MongoDB-Datenbank. Die App ist eine einfache selbst entwickelte Kontaktverwaltungs-App, in der Sie Ihre Kontakte speichern, anzeigen und löschen können. Der Zweck ist, einen Docker-Devcontainer mit einer Node.js-App und einer MongoDB-Datenbank sowie einigen weiteren Dingen zu präsentieren.

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
Die verwendete Datenbank ist eine MongoDB-Datenbank. Sie läuft auf Port 27017.

### Dummy Data
Die Demodaten werden mit dem Skript insertDemoContacts.js eingefügt. Es wird beim Erstellen des Containers ausgeführt. Wenn Sie später zu einem beliebigen Zeitpunkt Demodaten einfügen möchten, führen Sie aus:
```bash
node insertDemoContacts.js
```

### Database Tools
Wir haben zwei Tools, um mit der MongoDB-Datenbank zu arbeiten:
#### MongoDB Express
- Öffnen sie das Tool auf [localhost:8081](http://localhost:8081)
- Login mit Username: ``admin`` und Password: ``pass``
- Verwalten Sie ihre Datenbank

#### MongoDB VsCode extension
- Klicken Sie im MongoDB-Tab auf der linken Seite Ihres VSCode-Editors.
- Klicken Sie auf die lokale MongoDB, die auf ``localhost:27017`` läuft


## Extensions
- MongoDB
- Prettier
- Icons
- Docker
- Color-Info
- W3C-Validator

### Important
Das in diesem Devcontainer verwendete Node-Image kommt bereits mit einigen Erweiterungen wie EsLint. Weitere Informationen finden Sie auf  [DockerHub-Node](https://hub.docker.com/_/microsoft-devcontainers-javascript-node)

## Productive Containers
Sie können Ihren produktiven Container mit der Dockerfile in diesem Projekt erstellen. Beachten Sie, dass Ihre MongoDB-Datenbank nicht in diesem produktiven Container installiert wird. Es wird nur die Node.js-App ohne Docker- oder GitHub-Dateien enthalten. Die .env- und Deployment-Dateien werden ebenfalls nicht kopiert. Wenn Sie diese App wirklich für produktive Zwecke verwenden möchten, stellen Sie sicher, dass Sie eine externe MongoDB-Datenbank verbinden, die Sie an einem anderen Punkt konfiguriert haben.

### .env file configuration
Um Ihr Docker-Image auf Docker-Hub zu deployen, müssen Sie sich mit Ihrem Konto anmelden. Dafür müssen Sie Ihren Benutzernamen und Ihr Passwort in der .env-Datei festlegen, die vom Deployment-Skript gelesen wird. Gehen Sie dazu wie folgt vor:
1. Copy ``.env.sample``
2. Rename it to ``.env``
3. Set your credentials to the matching variables

### Deploy your productive image on DockerHub
Sie können Ihr Docker-Image mit dem vorhandenen deployment.sh-Skript bereitstellen. Um das Skript auszuführen, öffnen Sie Ihr Bash-Terminal und führen Sie den folgenden Befehl aus:
```bash
./deployment.sh
```

Wenn der Zugriff verweigert wird, führen Sie die folgenden Befehle aus:
```bash
chmod +x deployment.sh
```
oder
```bash
sudo ./deployment.sh
```
Nach dem Push Ihres Images finden Sie es auf [DockerHub](https://hub.docker.com/repositories).

### Important 
Um dieses Deployment-Skript auszuführen, müssen Sie sich auf Ihrer lokalen Maschine und nicht im Dev-Container befinden. Sie können dieses Projekt einfach auf Ihre Maschine ziehen und das Skript mit Ihrer lokal installierten Bash-Shell (meistens WSL) ausführen.


