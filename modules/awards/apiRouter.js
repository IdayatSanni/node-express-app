const express = require("express");
const router = express.Router();
const model = require("./func"); //import func.js

router.get("/api/award", async (request, response) => {
  let awards = await model.getAwards();
  response.json(awards);
});

module.exports = router;
