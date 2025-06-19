const express = require('express');
const app = express();
const db = require('./db');

app.get('/', (req, res) => {
    res.send('<h1>Hello from Node.js!</h1>');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('DBエラー:', err);
            return res.status(500).send('DBエラー');
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('🌐 サーバー起動: http://localhost:3000');
});
