//importo express
const express = require("express");
const app = express();
const port = 3000;

//middleware static di express
app.use(express.static("public"));

//body-parser per "application/json"
app.use(express.json());

//rotta di test
app.get("/api", (req, res) => {
  console.log("Hai richiesto la rotta di index");
  res.send("Home delle API della movieApp");
});

//avvio server
app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});
