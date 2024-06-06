const express = require('express');
const pool = require('./db');

const app = express();

app.get('/getVehicles', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM vehicle'); 
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});