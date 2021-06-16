const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const salle = require("./back/controllers/salle");
const club = require("./back/controllers/club");
const reservation = require("./back/controllers/reservation");
const authentification = require("./back/controllers/authentification");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "fedi",
  database: "projet",
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
