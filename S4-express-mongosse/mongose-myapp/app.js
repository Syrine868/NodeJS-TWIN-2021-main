var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var contactRouter = require("./routes/contact");
var app = express();
//import database et config
var mongoose = require('mongoose');
var configDB=require('./database/mongodb.json');
console.log('message');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/contact", contactRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//connection to mongoose
const connect = mongoose.connect(
  configDB.mongo.uri ,
{
useNewUrlParser: true ,
useUnifiedTopology: true
},
()=> console.log("Connected to DB !!")
);
module.exports = app;
