# ✅ MERN Task Manager

A full-stack **Task Manager application** built with the **MERN Stack**: MongoDB, Express.js, React, and Node.js.

This project was created as part of my learning journey in full-stack web development. It helped me practice how to connect a React frontend with a REST API, manage application data with MongoDB, and organize backend logic using routes, controllers, and models.

## 🎯 Project Objective

The goal of this project is to build a simple task management application where users can:

* Create new tasks
* View existing tasks
* Update tasks
* Mark tasks as completed
* Delete tasks

The application demonstrates the basic communication flow between a frontend application, a REST API, and a MongoDB database.

## 🛠️ Technologies Used

### Frontend

* **React**
* **Vite**
* **JavaScript**
* **Axios**
* **React Icons**
* **Sass / CSS**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **CORS**
* **dotenv**

## 🧱 MERN Stack

This project uses the MERN stack:

```text
MongoDB
   ↑
Mongoose
   ↑
Express.js
   ↑
Node.js
   ↑
REST API
   ↑
Axios
   ↑
React
```

* **MongoDB** stores the tasks.
* **Express.js** provides the REST API.
* **React** provides the user interface.
* **Node.js** runs the backend server.
* **Mongoose** handles communication between Node.js and MongoDB.
* **Axios** handles HTTP requests from the frontend.

## 📂 Project Structure

```text
Task_Manager_Mern_App/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoute.js
│   └── server.js
│
├── frontend/
│   └── taskManager/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── App.css
│       │   ├── App.jsx
│       │   └── main.jsx
│       │
│       ├── index.html
│       ├── package.json
│       └── vite.config.js
│
├── package.json
└── README.md
```

## 📋 Task Model

Each task is stored in MongoDB with the following structure:

```json
{
  "name": "Learn MERN Stack",
  "completed": false
}
```

The task model includes:

* `name` — Name or description of the task
* `completed` — Indicates whether the task has been completed
* `createdAt` — Task creation date
* `updatedAt` — Last update date

## 🔌 REST API

The backend provides CRUD operations for managing tasks.

### Create a Task

```http
POST /api/tasks
```

Example request:

```json
{
  "name": "Learn Express.js",
  "completed": false
}
```

### Get All Tasks

```http
GET /api/tasks
```

Returns all tasks stored in MongoDB.

### Get a Task by ID

```http
GET /api/tasks/:id
```

Returns a specific task using its MongoDB ID.

### Update a Task

```http
PUT /api/tasks/:id
```

Example:

```json
{
  "name": "Learn Express.js",
  "completed": true
}
```

### Delete a Task

```http
DELETE /api/tasks/:id
```

Deletes a task using its ID.

## ✨ Features

* Create tasks
* Display stored tasks
* Edit existing tasks
* Mark tasks as completed
* Delete tasks
* Persistent storage with MongoDB
* REST API communication
* React frontend
* Backend separated into routes, controllers, and models
* HTTP requests using Axios

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have installed:

* Node.js
* npm
* MongoDB or a MongoDB Atlas account

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/githubjuanmanuel/Task_Manager_Mern_App.git
```

Navigate to the project directory:

```bash
cd Task_Manager_Mern_App
```

Install backend dependencies:

```bash
npm install
```

Then navigate to the frontend:

```bash
cd frontend/taskManager
```

Install frontend dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the appropriate backend location.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Do not commit real credentials or database connection strings to GitHub.

## ▶️ Running the Backend

From the root directory:

```bash
npm run backend
```

Or:

```bash
npm start
```

The backend will typically run on:

```text
http://localhost:5000
```

## 💻 Running the Frontend

Navigate to:

```bash
cd frontend/taskManager
```

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, usually:

```text
http://localhost:5173
```

## 🔄 Application Flow

The application follows this basic architecture:

```text
User
  ↓
React Interface
  ↓
Axios HTTP Request
  ↓
Express REST API
  ↓
Controller
  ↓
Mongoose Model
  ↓
MongoDB
```

When a user creates, updates, or deletes a task, React sends an HTTP request to the backend.

Express receives the request and delegates the operation to the corresponding controller.

The controller uses the Mongoose model to interact with MongoDB and returns the result to the frontend.

## 📚 Concepts Practiced

During this project, I practiced:

* MERN Stack development
* Full-stack application architecture
* REST API development
* CRUD operations
* Express routes
* Controllers
* Mongoose models
* MongoDB integration
* Asynchronous JavaScript
* `async / await`
* HTTP requests with Axios
* React components
* React state management
* Connecting frontend and backend applications
* Environment variables
* CORS configuration
* Error handling
* Separation of responsibilities

## 🔮 Future Improvements

Some improvements I would like to add include:

* User authentication
* JWT authorization
* Tasks associated with individual users
* Due dates
* Task priorities
* Task categories
* Search functionality
* Task filters
* Pagination
* Improved form validation
* Responsive design improvements
* Dark mode
* Deployment
* Unit and integration tests

## 👨‍💻 Author

**Juan Manuel**

GitHub:
https://github.com/githubjuanmanuel

## 📄 Repository

https://github.com/githubjuanmanuel/Task_Manager_Mern_App

---

This project is part of my continuous learning journey in **full-stack and backend development using JavaScript and the MERN Stack**.
