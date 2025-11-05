const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

// index
router.get("/", movieController.index);

// show
router.get("/:id", movieController.show);

//store reviews
router.post("/:id/reviews", movieController.storeReview);

module.exports = router;
