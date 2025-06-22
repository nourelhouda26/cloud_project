# ☁️ Tabbed Menu Web Application

A responsive tabbed menu web application that simulates REST API calls when menu items are clicked.  
This project was created as part of a midterm assignment for the **Higher Institute of Science**.

🔗 **DockerHub Image**: [nourn/cloud_project](https://hub.docker.com/r/nourn/cloud_project)

---

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Menu Item Counts](#menu-item-counts)
- [Technical Implementation](#technical-implementation)
- [Project Structure](#project-structure)
- [Running the Application with Apache httpd](#running-the-application-with-apache-httpd)
- [Docker Deployment](#docker-deployment)
- [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)

---

## 📌 Project Overview

This web application demonstrates modern frontend development techniques including:

- Dynamic tabbed interface
- Simulated REST API calls using asynchronous JavaScript
- Responsive and accessible design
- Hosted with Apache httpd and containerized with Docker

---

## 🚀 Features

### Interactive Tab System

- 4 tabs with distinct menu item counts
- Visual feedback for active tabs
- Dynamic content rendering

### API Simulation

- REST API call simulation with 1500ms delay
- Loading indicators and completion messages

### UI/UX Elements

- Responsive layout and typography
- Modern button styles and hover effects
- Accessible design with color contrast

---

## 🔢 Menu Item Counts

- **Tab 1**: 4 menu items
- **Tab 2**: 4 menu items
- **Tab 3**: 4 menu items
- **Tab 4**: 4 menu items


---

## 🧪 Technical Implementation

| Component         | Technology Used        |
|------------------|------------------------|
| Frontend         | HTML5, CSS3, JavaScript |
| Hosting          | Apache HTTP Server     |
| Containerization | Docker                 |
| Version Control  | Git/GitHub             |

---

## 🗂️ Project Structure

```
Cloud_Project/
├── index2.html        # Main HTML file
├── style2.css         # Stylesheet
├── java.js            # JavaScript logic
├── Dockerfile         # Docker container setup
├── README.md          # Project documentation
```

---

## 🖥️ Running the Application with Apache httpd

### 1. Install Apache

```bash
sudo apt update
sudo apt install apache2
sudo service apache2 start
```

### 2. Add User to www-data Group

```bash
sudo usermod -a -G www-data $USER
sudo chown -R $USER:$USER /var/www
```

### 3. Copy Files

```bash
sudo cp -r * /var/www/html
```

### 4. Access in Browser

Open: `http://localhost`

---

## 🐳 Docker Deployment

### 🔨 Build Docker Image

```bash
docker build -t cloud_project .
```

### ▶️ Run the Docker Container

```bash
docker run -d -p 8080:80 cloud_project
```

Then visit: [http://localhost:8080](http://localhost:8080)

---

## 📥 Installation

### Clone the Repository

```bash
git clone https://github.com/nourelhouda26/cloud_project
```

### Navigate to the Project

```bash
cd cloud_project
```

---

## 🧪 Usage

- Click on a tab to display its menu items.
- Click on a menu item to simulate a REST API call.
- The status bar at the bottom will show:
  - Loading message during the simulated call
  - Success message after 1.5 seconds

### 🔄 Keyboard Navigation (if supported)

- Use **Tab** to navigate
- Use **Enter** or **Space** to activate items

---

## 👥 Authors

- Nia Nour elhouda
- Chebab Lyna

> M1 Cybersecurity — Higher Institute of Science, 2025
