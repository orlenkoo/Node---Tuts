const mongoose = require("mongoose");

const dashboard = (_req, res, next) => {
  res.render("index");
};

const showReferencesPage = (_req, res) => {
  res.render("references");
};

const showAboutPage = (_req, res) => {
  res.render("about");
};

const showPrecovidPage = (_req, res) => {
  res.render("precovid");
};

const showPostCovidPage = (_req, res) => {
  // const { name, email } = req.body;
  // if (name == null || email == null) {
  //   // throw error
  // }

  // create new entry in PreCovid table

  res.render("postcovid");
};

const showEndOfSurveyPage = (_req, res) => {
  res.render("endofsurvey");
};

module.exports = { dashboard, showReferencesPage, showAboutPage, showPrecovidPage, showPostCovidPage, showEndOfSurveyPage };
