const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>CHANGED Hello from my server!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About the Web Design Club</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact the Web Design Club</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:` + PORT);
});