//importo il pacchetto mysql2
const mysql = require("mysql2");

//utilizzo il metodo di creazione oggetto di connessione
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db-movies",
});

module.exports = connection;
