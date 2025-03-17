## **Implementing & Deploying a Simple HTTP Web Service**

This is a simple Node.js web service using Express that provides a task management API with a home page.

---

## **Features**

- **Home Page**: Displays a simple HTML page with available API endpoints.
- **GET /api/tasks**: Retrieves all tasks.
- **POST /api/tasks**: Adds a new task.

---

## **Installation & Setup**

1. **Clone the repository**:

   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   ```sh
   npm install express
   ```

3. **Run the server**:

   ```sh
   node app.js
   ```

4. **Access the service**:

   - Open your browser and go to: `http://localhost:3000/`
   - Use API endpoints: `http://localhost:3000/api/tasks`

---

## **Code Implementation**

Create an `app.js` file and add the following code:

```javascript
// Simple Task API with Express and Home Page
const express = require('express');
const app = express();

app.use(express.json());

// Simple in-memory task storage
let tasks = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" }
];

// Home page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Task Manager API</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #333; }
          ul { list-style-type: none; padding: 0; }
          li { margin-bottom: 10px; }
          code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>Task Manager API</h1>
        <p>Welcome to the Task Manager API. Use the following endpoints:</p>
        <ul>
          <li><code>GET /api/tasks</code> - Get all tasks</li>
          <li><code>POST /api/tasks</code> - Create a new task</li>
        </ul>
      </body>
    </html>
  `);
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Create a task
app.post('/api/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## **API Endpoints**

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/api/tasks` | Retrieve all tasks |
| POST   | `/api/tasks` | Create a new task  |

### **POST /api/tasks Example**

#### **Request Body**

```json
{
  "title": "New Task"
}
```

#### **Response**

```json
{
  "id": 3,
  "title": "New Task"
}
```

---

## **Deployment**

To deploy this service, follow these steps:

1. **Install PM2 (optional, for production use)**:

   ```sh
   npm install -g pm2
   ```

2. **Start the server using PM2**:

   ```sh
   pm2 start app.js --name task-manager
   ```

3. **Monitor logs**:

   ```sh
   pm2 logs task-manager
   ```

---

## **License**

This project is licensed under the MIT License.

nothing

