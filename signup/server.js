const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware
  
  const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'school'
  });
  
  db.connect(err => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL database');
  });
  
  app.post('/submit', (req, res) => {
    const { firstName, lastName, dob, password } = req.body;
    console.log(req.body+"======================================");
    const sql = `INSERT INTO users (first_name, last_name, dob, password) VALUES (?, ?, ?, ?)`;
    db.query(sql, [firstName, lastName, dob, password], (err, result) => {
      if (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Error inserting data' });
      } else {
        console.log('Data inserted successfully');
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  