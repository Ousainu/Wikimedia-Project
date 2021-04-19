let express = require("express");
let app = express();

let usersRouter = require("./routes/users");

app.use("/users", usersRouter);
