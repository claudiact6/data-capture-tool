var db = require("../models");

module.exports = function(app) {
  //Get data on a specific user
  app.get("/api/users/:userid", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.userid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //Get all forms for a user (based on "group", not user)
  app.get("/api/forms/:groupid", function(req, res) {
    db.Form.findAll({
      where: {
        GroupId: req.params.groupid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //Get all users in a group
  app.get("/api/users/:groupid", function(req, res) {
    db.Group.findAll({
      where: {
        GroupId: req.params.groupid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //Get submissions for a specific form . THIS DOESN'T WORK.
  /*   app.get("/api/form/:formid", function(req, res) {
    var formId = req.params.formid;
    console.log(formId);
    db.formId.findAll({}).then(function(data) {
      res.json(data);
    });
  }); */

  //Create user
  app.put("/api/users", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  //Create group (this needs to happen automatically when a new user signs up--if they sign up on main page, they are automatically an admin of a new group.)
  app.put("/api/groups", function(req, res) {
    db.Group.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  //Create form (AND CREATE TABLE FOR FORM in this same moment? or separately?*****)
  app.put("/api/forms", function(req, res) {
    db.Form.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  /*   //Insert form submissions to form table (this doesn't work yet)
  app.put("/api/form/:formid", function(req, res) {
    var formId = req.params.formid;
    db.formId.create(req.body).then(function(data) {
      res.json(data);
    });
  }); */

  //Delete form
  app.delete("/api/forms/:formid", function(req, res) {
    db.Form.destroy({
      where: {
        id: req.params.formid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //Delete user (admins only; does *not* delete forms created by user)
  app.delete("/api/users/:userid", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.userid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //Delete group (only an admin user can do this; it deletes all group data including users and forms)
  app.delete("/api/gropus/:groupid", function(req, res) {
    db.Group.destroy({
      where: {
        id: req.params.groupid
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
