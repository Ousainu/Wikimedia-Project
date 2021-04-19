let express = require("express");
let router = express.Router();
let db = require("../database");

router.get("/form", (req, res, next) => {
  res.render("users-form");
});

router.post("/create", (req, res, next) => {
  const userDetails = req.body;

  let sql = "INSERT INTO users SET ?";
  db.query(sql, userDetails, function (err, data) {
    if (err) throw err;
    console.log("User data is inserted successfully ");
  });
  res.redirect("/users/form"); // redirect to user form page after inserting the data
});

module.exports = router;
