require("./db/index.js");
const createError = require("http-errors");
const express = require("express");
const { passport } = require("./services/passport");
const path = require("path");
const cookieParser = require("cookie-parser")
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const ImageRouter = require("./routes/cloudinary");
const pageRouter = require("./routes/page")

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(logger("dev"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/v1", authRouter);
app.use("/users", usersRouter);
app.use("/image", ImageRouter);
app.use("/pages", pageRouter);
app.use(passport.initialize());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).send(err)
});

module.exports = app