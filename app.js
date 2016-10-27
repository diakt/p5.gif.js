const path = require('path');
const fs = require('fs');

const express = require('express');
const logger = require('morgan');
const formidable = require('formidable');

const routes = require('./api/routes');
const category = require('./api/category');
const tags = require('./api/tags');
const dict = require('./api/dict');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./api/config');

const app = express();

app.use(logger('dev'));

if (config.isDev()) {

  // CORS for ports proxy with Webpack Dev Server
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/tags', tags);
app.use('/api/dict', dict);
app.use('/api/category', category);

app.post('/api/upload', (req, res) => {

  // create an incoming form object
  const form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, 'static');

  console.log(form.uploadDir)

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  let fileName = '';
  form.on('file', (field, file) => {
    console.log(file.path + ' is coming..')
    fileName = file.name;
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', (err) => {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', () => {
    res.end(JSON.stringify({fileName}));
  });

  // parse the incoming request containing the form data
  form.parse(req);
});


app.use('/', routes);


/// catch 404 and forwarding to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
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
