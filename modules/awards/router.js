const express = require("express");
const router = express.Router();
const model = require("./func");

//In order to parse POST body data as JSON, do the following. //The following lines will convert the form data from query //string format to JSON format.
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//PAGE ROUTES
router.get("/admin/award", async (request, response) => {
  links = await model.getLinks();
  award = await model.getAwards();
  response.render("admin/award-list", {
    title: "Home",
    menu: links,
    award: award,
  });
});

router.get("/admin/award/add", async (request, response) => {
  links = await model.getLinks();
  award = await model.getAwards();
  response.render("admin/award-add", {
    title: "Add Award",
    menu: links,
    award: award,
  });
});

//FORM PROCESSING PATHS
router.post("/admin/award/add/submit", async (request, response) => {
  //for a POST form, field values are passed in request.body.<field_name>
  //we can do this because of the setting to convert the urlencoded data to JSON
  let newAward = {
    weight: parseFloat(request.body.weight),
    award: request.body.award,
    organization: request.body.organization,
    awardDate: parseInt(request.body.awardDate, 10),
  };
  await model.addAward(newAward);
  response.redirect("/admin/award");
});

module.exports = router;
