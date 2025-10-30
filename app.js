//importo express
const express = require("express");
const app = express();
const port = 3000;

//importo modulo router movies
const movieRouter = require("./routers/movieRouter");

//middleware static di express
app.use(express.static("public"));

//body-parser per "application/json"
app.use(express.json());

// rotte per i movies
app.use("/api/movies", movieRouter);

//rotta di test
app.get("/api", (req, res) => {
  console.log("Hai richiesto la rotta di index");
  res.send("Home delle API della movieApp");
});

//avvio server
app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});
