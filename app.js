var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

var routesIndex = require('./routes/index');
var routesPage = require('./routes/page');

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib())
    .import('nib');
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(stylus.middleware({ 
    src: __dirname + '/public',
    compile: compile
  })
);
app.use(express.static(__dirname + '/public'));

app.use('/', routesIndex);
app.use('/page', routesPage);

app.listen('5678');

module.exports = app;