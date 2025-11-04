//importo la connessione al database
const db = require("../data/db");

// INDEX: lista di tutti i film
function index(req, res) {
  const sql = "SELECT * FROM movies";

  //aggiungo la connessione per la richiesta
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });

    // compongo l'URL assoluto dell'immagine
    const movies = result.map((movie) => ({
      ...movie,
      image: req.imagePath + movie.image,
    }));

    return res.json(movies);
  });
}

// SHOW: dettagli film + recensioni
function show(req, res) {
  // 1) prendo l'id dinamico dalla URL
  const { id } = req.params;

  // 2) query per il singolo film (prepared statement)
  const movieSql = "SELECT * FROM movies WHERE id = ?";

  // 3) query per le recensioni del film
  const reviewSql = "SELECT * FROM reviews WHERE movie_id = ?";

  // 4) eseguo prima la query del film
  db.query(movieSql, [id], (err, movieResult) => {
    // errore DB
    if (err) return res.status(500).json({ error: "Database error" });

    // 404 se non trovato
    if (movieResult.length === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }

    // prendo l'oggetto film
    const singleMovie = movieResult[0];

    // imagePath
    if (req.imagePath && singleMovie.image) {
      singleMovie.image = req.imagePath + singleMovie.image;
    }

    // 5) seconda query: recensioni del film
    db.query(reviewSql, [id], (err, reviewResult) => {
      if (err) return res.status(500).json({ error: "Database error" });

      // attacco l'array di recensioni all'oggetto film
      singleMovie.reviews = reviewResult;

      // 6) risposta finale
      return res.json(singleMovie);
    });
  });
}

module.exports = { index, show };
