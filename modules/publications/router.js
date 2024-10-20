const express = require("express");
const router = express.Router();
const model = require("./func");

//In order to parse POST body data as JSON, do the following. //The following lines will convert the form data from query //string format to JSON format.
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//PAGE ROUTES
router.get("/admin/publication", async (request, response) => {
  links = await model.getLinks();
  journal = await model.getPublications();
  response.render("admin/publication-list", {
    title: "Home",
    menu: links,
    publication: journal,
  });
});

router.get("/admin/publication/add", async (request, response) => {
  links = await model.getLinks();
  journal = await model.getPublications();
  response.render("admin/publication-add", {
    title: "Home",
    menu: links,
    publication: journal,
  });
});

//FORM PROCESSING PATHS
router.post("/admin/publication/add/submit", async (request, response) => {
  //for a POST form, field values are passed in request.body.<field_name>
  //we can do this because of the setting to convert the urlencoded data to JSON
  let newPublication = {
    weight: request.body.weight,
    journal: request.body.journal,
    title: request.body.title,
    contributor: request.body.contributor,
    year: request.body.year,
    link: request.body.link,
  };
  await model.addPublication(newPublication);
  response.redirect("admin/publication");
});

module.exports = router;
