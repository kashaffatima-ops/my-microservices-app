// server.js
const express = require('express');
const cors = require('cors');
const app = express();



let todos = [{ id: 1, task: "Do laundry" }];

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.listen(3002, () => {
    console.log('Todo service running on port 3002');
});
