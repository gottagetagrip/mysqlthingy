const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Your MySQL root password (empty by default in XAMPP)
    database: "dynamite"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);  
    } else {
        console.log("Connected to MySQL");
    }
});

app.get('/USERS', (req, res) => {
    db.query("SELECT * FROM USERS", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
