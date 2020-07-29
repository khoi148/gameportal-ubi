const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//Popular ORM Handler package that builds on top of MongoDB
const mongoose = require("mongoose");
//Package to use .env file as environment variables
const dotenv = require("dotenv");
dotenv.config();

//connection to mongoDB, using mongoose ORM
const connectionString = process.env.DB_CONNECTION;
mongoose.connect(connectionString, {
  // some options to deal with deprecated warning, you don't have to worry about them.
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//main routes here
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const gameinfoRouter = require("./routes/gameInfo");
const playerinfoRouter = require("./routes/playerInfo");
const rewardsRouter = require("./routes/rewards");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(indexRouter);
app.use(usersRouter);
app.use(gameinfoRouter);
app.use(playerinfoRouter);
app.use(rewardsRouter);

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
