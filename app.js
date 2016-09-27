var path = require('path');
var fs = require('fs');

var express = require('express');
var logger = require('morgan');
var routes = require('./api/routes.js');
var category = require('./api/category.js');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./api/config');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (config.isDev()) {

  // CORS for ports proxy with Webpack Dev Server
  app.use((req, res, next) => {
    console.log(req.url)
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
  });
}

app.use(express.static(path.join(__dirname, '.')));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './build')));

app.use('/api/category', category);
app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (config.isDev()) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
});

module.exports = app;
