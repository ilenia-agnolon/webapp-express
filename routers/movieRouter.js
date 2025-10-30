const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

// /api/movies -> lista film
router.get("/", movieController.index);

// /api/movies/:id -> placeholder (verrà implementato dopo)
router.get("/:id", movieController.show);

module.exports = router;
