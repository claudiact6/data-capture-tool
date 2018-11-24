const db = require("../models");
const auth = require('./auth');
const firebase = require('firebase');
require('firebase/auth');

// ...
module.exports = function (app) {
  app.get("/register", function (req, res, next) {
    res.render("register");
  });

  app.get("/", function (req, res) {
    if (auth.isAuthenticated) {
      res.render("all");
    } else {
      res.render("register");
    }
  });

  app.get("/add-note", function (req, res) {
    res.render("add");
  });

  app.get("/my-notes", function (req, res) {
    res.render("all");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
