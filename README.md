# FacebookApp

A full-stack web application built with **Angular (frontend)** and **PHP (backend)** designed to replicate basic Facebook-like features such as user authentication, posting, social interaction, and dynamic content rendering. This project demonstrates integration between a modern frontend framework and a traditional backend API.

## 📌 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Screenshots / Preview](#screenshots--preview)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

---

## 🧠 About

**FacebookApp** is a project that showcases a social application interface with functionality similar to a simplified Facebook platform. The **Angular frontend** provides a responsive, component-driven user interface, while the **PHP backend** handles server-side logic such as data storage, user sessions, and API responses.

---

## ✨ Features

- 🧑‍💻 **User Authentication** – Users can register, log in, and manage sessions.  
- 🗨️ **Posts & Feed** – Create and display posts dynamically.  
- 🔄 **Frontend-Backend Integration** – Angular communicates with PHP API for data operations.  
- 🎨 **Responsive UI** – Designed with clean navigation and adaptability to different screen sizes.  
- 🛠️ Structured for easy extension and backend logic improvements.

---

## 🧰 Tech Stack

The project uses the following core technologies:

| Layer | Technology |
|-------|------------|
| Frontend | Angular |
| Backend | PHP |
| Styling | CSS / SCSS |
| HTTP | RESTful API |
| Tooling | Node.js & npm for Angular |

---

## 📷 Screenshots / Preview

*(Optional: Add UI screenshots or a deployed demo link here)*

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 🧾 Prerequisites

Make sure you have installed:

- **Node.js & npm** (for Angular)  
- **Angular CLI** (`npm install -g @angular/cli`)  
- **PHP** (local development server like XAMPP, WAMP, MAMP, or built-in PHP server)  

---

## 💻 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dewey-byte/facebookApp.git
Navigate to project directory


cd facebookApp
▶️ Running the App
🧱 Backend (PHP API)
Place the api/ folder into your PHP server document root (e.g., htdocs for XAMPP).

Start your PHP server (e.g., via XAMPP/WAMP).

Update API URL base in Angular service if needed.

📦 Frontend (Angular)
Install dependencies:


npm install
Run the Angular dev server:


ng serve
Open your browser and go to:


http://localhost:4200
🧠 API Endpoints (Example)
Below are placeholder API endpoints. Customize based on your backend routes.

Method	Endpoint	Description
POST	/api/auth/register.php	Register a new user
POST	/api/auth/login.php	User login
GET	/api/posts/getPosts.php	Retrieve posts
POST	/api/posts/createPost.php	Create a new post

📌 Usage
After running both backend and frontend:

Navigate to the Angular app in your browser.

Register or log in with your credentials.

Create/view posts or interact with the UI as designed.

(Adjust based on implemented features)

🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository

Create your feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

📄 License
This project is open-source. Feel free to modify and use it as needed. (Add a LICENSE file if needed)

📬 Contact
Created by Dewey-byte — feel free to reach out for questions, contributions, or collaboration!

⭐ Thanks for checking out this project!
