const router = require("express").Router();

router.post("/", (req, res, next) => {
  res.redirect("/confirmation");
});

router.get("/confirmation"),
  (req, res, next) => {
    const response = fetch("/api/users", req.body);
    res.render("../views/confirmation.html");
  };

module.exports = router;
