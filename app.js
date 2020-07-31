const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//Popular ORM Handler package that builds on top of MongoDB
const mongoose = require("mongoose");
//Package to use .env file as environment variables
const dotenv = require("dotenv");

//main routes here
const indexRouter = require("./routes/index");
const gameinfoRouter = require("./routes/gameinfo");
const playerinfoRouter = require("./routes/playerinfo");
const rewardsRouter = require("./routes/rewards");
const eventsRouter = require("./routes/events");
const pretty = require("express-prettify");
const app = express();

dotenv.config();
const connectionString = process.env.DB_CONNECTION;
mongoose.connect(connectionString, {
  // some options to deal with deprecated warning, you don't have to worry about them.
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(pretty({ query: "pretty" }));

app.use(indexRouter);
app.use(gameinfoRouter);
app.use(playerinfoRouter);
app.use(rewardsRouter);
app.use(eventsRouter);

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
  res.send(`Error: ${err.status}`);
});

module.exports = app;
