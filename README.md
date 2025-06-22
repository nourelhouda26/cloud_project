# Tabbed Menu Web Application

## 📋 Description

Cette application Web présente un menu à onglets avec des boutons pour chaque service. Lorsqu'on clique sur un bouton, une simulation d'appel REST API s'affiche dans une barre d'état.

## 🚀 Technologies utilisées

- HTML (structure)
- CSS (design)
- JavaScript (fonctionnalités)
- Apache httpd (hébergement via Docker)

## 📂 Contenu

- `index.html` : Page principale.
- `style.css` : Feuille de style.
- `script.js` : Fonctions JS.
- `Dockerfile` : Pour lancer le projet dans un conteneur Apache.

## 🐳 Exécution avec Docker

### 1. Construire l'image Docker

```bash
docker build -t tabbed-menu-app .
```

### 2. Lancer le conteneur

```bash
docker run -d -p 8080:80 tabbed-menu-app
```

### 3. Accéder à l'application

Ouvrez dans votre navigateur :
```
http://localhost:8080
```

## 🔗 Liens à fournir

- Lien du dépôt GitHub : `https://github.com/<ton-utilisateur>/<nom-du-repo>`
- Lien DockerHub : `https://hub.docker.com/r/<ton-utilisateur>/<nom-de-limage>`

---

Réalisé dans le cadre du projet de développement Web Front-end.
