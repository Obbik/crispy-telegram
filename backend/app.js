import express from "express";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mysql from "mysql"

const app = express()
const port = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const connection = mysql.createConnection({
  host: 'db',
  user: 'db_user',
  password: 'db_user_pass',
  database: 'app_db'
})

connection.connect()

app.get('/', (req, res) => {
  res.send('Hello World!2')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
