// const db = require("../models");
var auth = require("./auth");
// const firebase = require('firebase');
require("firebase/auth");

// ...
module.exports = function(app) {
  app.get("/register", function(req, res) {
    res.render("register");
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/my-notes", function(req, res) {
    res.render("all");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
