const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const salle = require('./controllers/salle');
const club = require('./controllers/club');
const reservation = require('./controllers/reservation');
const authentification = require('./controllers/authentification');
const connection = mysql.createConnection({
  host     : '52.166.172.40',
  user     : 'O_CLUB',
  password : 'oclub',
  database : 'O_CLUB'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(salle(connection))
  .use(club(connection))
  .use(reservation(connection))
  .use(authentification(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});