const express = require("express");
const router = express.Router();
const model = require("./func"); //import func.js

router.get("/menu", async (request, response) => {
  let links = await model.getLinks();
  response.json(links);
});

module.exports = router;
