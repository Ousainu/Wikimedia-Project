const express = require("express");
const app = express();
const path = require("path");
module.exports = app;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, ".", "public")));
app.use(express.static(path.join(__dirname, ".", "node_modules", "css")));

app.use("/api", require("./routes"));

// Sends our index.html (the "single page" of our SPA)
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, ".", "views", "users.html"));
});

app.get("/confirmation", (req, res, next) => {
  res.sendFile(path.join(__dirname, ".", "public", "confirmation.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
