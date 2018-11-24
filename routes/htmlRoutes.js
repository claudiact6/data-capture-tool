var db = require("../models");
var auth = require("./auth");
var firebase = require('firebase');
require("firebase/auth");

// ...
module.exports = function(app) {
  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/", function(req, res) {
      // console.log(auth.isAuthenticated);
      res.render("all");
    } 
  });

  app.get("/add-note", function(req, res) {
    res.render("add");
  });

  app.get("/my-notes", function(req, res) {
    res.render("all");
  });

  //Render Admin Dashboard

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
