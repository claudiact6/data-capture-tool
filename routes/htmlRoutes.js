const db = require("../models");
const auth = require('./auth');
const firebase = require('firebase');
require('firebase/auth');

// ...
module.exports = function (app) {
  app.get("/register", function (req, res, next) {
    res.render("register");
  });

<<<<<<< HEAD
  app.get("/", function (req, res) {
    if (auth.isAuthenticated) {
      res.render("all");
    } else {
      res.render("register");
    }
=======
  // Render login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/dashboard", function(req, res) {
    res.render("admin");
  });
  // Load example page and pass in an example by id
  app.get("/dashboard/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("admin", {
        example: dbExample
      });
    });
>>>>>>> 414e82efe3a6ff5b0c69da31039c2ec4a42692ae
  });

  app.get("/add-note", function (req, res) {
    res.render("add");
  });

  app.get("/my-notes", function (req, res) {
    res.render("all");
  });

  //Render Admin Dashboard

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
