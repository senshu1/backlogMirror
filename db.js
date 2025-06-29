const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME
});

conn.connect(err => {
    if (err) {

        console.error('❌ DB接続失敗:', err);
    } else {
        console.log('✅ DB接続成功');
    }
});

module.exports = conn;
