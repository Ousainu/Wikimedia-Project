const router = require("express").Router();

// connect your API routes here!
router.use("/users", require("./users"));

module.exports = router;

// router.get("/form", (req, res, next) => {
//   res.render("users-form");
// });

// router.get("/users/create", (req, res, next) => {
//   console.log(req.body);
// });

// router.post("/create", (req, res, next) => {
//   const userDetails = req.body;

//   let sql = "INSERT INTO users SET ?";
//   db.query(sql, userDetails, function (err, data) {
//     if (err) throw err;
//     console.log("User data is inserted successfully ");
//   });
//   res.redirect("/users/form"); // redirect to user form page after inserting the data
// });

// module.exports = router;
