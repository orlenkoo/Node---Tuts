const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

router.route("/").get(indexController.dashboard);

//router.use("/users", require("./users")); db??

router.route("/references").get(indexController.showReferencesPage);

router.route("/about").get(indexController.showAboutPage);

router.route("/precovid").get(indexController.showPrecovidPage);

router.route("/postcovid").get(indexController.showPostCovidPage);

router.route("/endofsurvey").get(indexController.showEndOfSurveyPage);

//exports the router we are using
module.exports = router;
