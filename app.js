// require express, stylus + nib
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

// require route scripts
var routesIndex = require('./routes/index');
var routesPage = require('./routes/page');

// create express app
var app = express();

// set views and engine as jade
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// compile stylus and import nib for reset/css3
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib())
    .import('nib');
}
app.use(stylus.middleware({ 
    src: __dirname + '/public',
    compile: compile
  })
);


// set dir for static css/js/assets
app.use(express.static(__dirname + '/public'));

// set up routes
app.use('/', routesIndex);
app.use('/page', routesPage);

// on `node app.js` app will run at localhost:5678
app.listen('5678');

module.exports = app;