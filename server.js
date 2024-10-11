// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;
const path=require("path");
const app = express();
const pool = new Pool({
  user:process.env.USER,
  host:process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port:process.env.PORTT
});

app.use(cors());

app.get('/api/data', async (req, res) => {
    const properties = await pool.query('SELECT * FROM properties');
    const finances = await pool.query('SELECT * FROM financials');
     await res.json({ properties: properties.rows, finances: finances.rows });
});
app.get('/', (req, res) => {
 app.use(express.static(path.resolve(__dirname,"dashboard","dist")));
 res.sendFile(path.resolve(__dirname,"dashboard","dist","index.html"))
});


app.listen(PORT , () => {
  console.log('Server is running on port 5000');
});
