# Quora-Style CRUD App (Learning REST & Express)

A simple Quora-like web application built using **Node.js**, **Express.js**, and **EJS** templates.  
This project demonstrates **CRUD (Create, Read, Update, Delete)** operations following **RESTful principles** — perfect for beginners learning backend web development.

---

## 🚀 Features
- Create new posts
- Read all posts or a single post
- Update existing posts
- Delete posts
- Uses EJS for templating and Express for routing
- Method override for PATCH & DELETE requests

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templates)**
- **Method-Override**
- **UUID (for unique post IDs)**

---

## 📂 Project Structure
```
.
├── index.js           # Main server file
├── views/             # EJS templates (index, new, edit, show)
├── public/            # Static files (style.CSS)
└── package.json
```

---

## ⚙️ Setup and Run

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/quora-crud-app.git
cd quora-crud-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Server
```bash
node index.js
```

Server runs at 👉 **http://localhost:8080**

---

## 🧩 API Endpoints

| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| GET    | /posts          | View all posts          |
| GET    | /posts/new      | Show form to add post   |
| POST   | /posts/new      | Create new post         |
| GET    | /posts/:id      | View single post        |
| GET    | /posts/:id/edit | Edit form for a post    |
| PATCH  | /posts/:id      | Update a post           |
| DELETE | /posts/:id      | Delete a post           |

---

## 💡 Learning Concepts
- RESTful Routing
- CRUD Operations
- EJS Template Rendering
- Express Middleware
- Method Override for HTML forms

---

## 📸 Preview
## 📸 Preview

![App Preview](assets/preview.png)



---

## 🧑‍💻 Author
**Nitin Kumar Yadav**  
📧 nitinyadav8675@gmail.com  
🌐 [GitHub Profile](https://github.com/Nitin-kumar-yadav1307)

---

## 🪪 License
This project is licensed under the MIT License.
