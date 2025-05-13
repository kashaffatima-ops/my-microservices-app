// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    // Dummy authentication logic
    res.json({ message: 'Login successful' });
});

app.get('/login', (req, res) => {
    // Dummy authentication logic
    res.json({ message: 'Login successful' });
});


app.listen(3001, () => {
    console.log('Auth service running on port 3001');
});
