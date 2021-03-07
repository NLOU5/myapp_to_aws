var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var connectAPI = require('./routes/connectAPI');

const https = require('https');
const app = express();

const fs = require('fs');
/*const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const server = https.createServer({key: key, cert: cert }, app);*/

app.listen(9001);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'index.html')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/connectAPI', connectAPI);
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


/*app.get('/', (req, res) => { res.send('this is an secure server') });
server.listen(9001, () => { console.log('listening on 9000') });
*/


module.exports = app;
