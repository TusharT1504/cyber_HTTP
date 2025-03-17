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