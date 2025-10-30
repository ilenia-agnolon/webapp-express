//importo il pacchetto mysql2
const mysql = require("mysql2");

//utilizzo il metodo di creazione oggetto di connessione
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// tramite metodo connect avvia connessione
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

//esporto il modulo CJS
module.exports = connection;
