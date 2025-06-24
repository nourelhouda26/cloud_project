# ☁️ Tabbed Menu Web Application

A responsive tabbed menu web application that simulates REST API calls when menu items are clicked.  
This project was created as part of a midterm assignment for the **Higher Institute of Science**.

🔗 **DockerHub Image**: [nourn/cloud_project](https://hub.docker.com/r/nourn/cloud_project)  
🔗 **GitHub Repository**: [github.com/nourelhouda26/cloud_project](https://github.com/nourelhouda26/cloud_project)

---

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Menu Item Counts](#menu-item-counts)
- [Technical Implementation](#technical-implementation)
- [Project Structure](#project-structure)
- [Running the Application with Docker](#running-the-application-with-docker)
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
| Hosting          | Apache HTTP Server (Docker) |
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

## 🐳 Running the Application with Docker (Windows & All OS)

### Step 1: Open Terminal

Use **Command Prompt**, **PowerShell**, or **Git Bash**.

### Step 2: Navigate to your project folder

```bash
cd path\to\Cloud_Project
```

### Step 3: Build Docker Image

```bash
docker build -t cloud_project .
```

### Step 4: Run Docker Container

```bash
docker run -d -p 8080:80 cloud_project
```

### Step 5: Access the App

Open your browser and visit:

```
http://localhost:8080
```

✅ The application should load with a tabbed interface and REST API simulation messages.

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
✅ GitHub link: https://github.com/nourelhouda26/cloud_project⁠

✅ DockerHub link: https://hub.docker.com/r/nourn/cloud_project

## 👥 Authors

- **Nia Nour elhouda**
- **Chebbab Lyna**

> M1 Cybersecurity — Higher Institute of Science, 2025
