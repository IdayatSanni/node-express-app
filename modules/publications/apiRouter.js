const express = require("express");
const router = express.Router();
const model = require("./func"); //import func.js

router.get("/api/publication", async (request, response) => {
  let publication = await model.getPublications();
  response.json(publication);
});

module.exports = router;
