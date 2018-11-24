var firebase = require("firebase");
require("firebase/auth");
require("firebase/database");
// Initialize Firebase for the application
var config = {
  apiKey: "AIzaSyCWafVtkCJHdmELqLECnWx9bFVr1OrofAs",
  authDomain: "quickforms-31125.firebaseapp.com",
  databaseURL: "https://quickforms-31125.firebaseio.com",
  projectId: "quickforms-31125",
  storageBucket: "",
  messagingSenderId: "463191830446"
};

firebase.initializeApp(config);

module.exports = {
  isAuthenticated: function() {
    var user = firebase.auth().currentUser;
    if (user !== null) {
      return true;
    } else {
      return false;
    }
  }
};
