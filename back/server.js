var createError = require("http-errors");
var express = require("express");
var path = require("path");
const db = require("./db/db");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

// view engine setup
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Express Route File Requires
const routes = require("./routes");
const { User_Profile } = require("./models/index");

//APP ROUTES
app.use("/api", routes);
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch((err) => console.log(err));

module.exports = app;
