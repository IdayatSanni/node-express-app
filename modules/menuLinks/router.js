const express = require("express");
const router = express.Router();
const model = require("./func"); //import func.js

//CONVERT URLENCODED FORMAT (FOR GET/POST REQUESTS) TO JSON
//UrlEncoded format is query string format (e.g. parameter1=value1&parameter2=value2)
router.use(express.urlencoded({ extended: true }));
router.use(express.json()); //use JSON

//ADMIN PAGE PATHS
router.get("/menu", async (request, response) => {
  let links = await model.getLinks();
  response.render("admin/menu-list", { title: "Administer menu", menu: links });
});

module.exports = router;
