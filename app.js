//importo express
const express = require("express");
const app = express();
const port = 3000;

//importo modulo router movies
const movieRouter = require("./routers/movieRouter");

// importo i middleware
const errorServer = require("./middlewares/errorServer");
const notFound = require("./middlewares/notFound");
const imagePath = require("./middlewares/imagePath");

//importo middleware  CORS
const cors = require("cors");

// middleware per il CORS
app.use(
  cors({
    origin: process.env.FE_APP,
  })
);

//middleware static di express
app.use(express.static("public"));

//body-parser per "application/json"
app.use(express.json());

// registro il middleware per i percorsi immagini
app.use(imagePath);

// rotte per i movies
app.use("/api/movies", movieRouter);

//rotta di test
app.get("/api", (req, res) => {
  console.log("Hai richiesto la rotta di index");
  res.send("Home delle API della movieApp");
});

// richiamo middleware gestione errori server
app.use(errorServer);

// richiamo middleware gestione errore 404 rotta inesistente
app.use(notFound);

//avvio server
app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});
