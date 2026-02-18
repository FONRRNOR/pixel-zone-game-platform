const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pixel_zone"
});

db.connect(err => {
  if (err) {
    console.error("DB Error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/games", (req, res) => {
  db.query("SELECT * FROM games", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
