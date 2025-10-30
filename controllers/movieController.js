//importo la connessione al database
const db = require("../data/db");

// INDEX: lista di tutti i film
function index(req, res) {
  const sql = "SELECT * FROM movies";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    return res.json(result);
  });
}

function show(req, res) {}

module.exports = { index, show };
