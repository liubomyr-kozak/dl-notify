var express = require('express');
var app = express();
var path = require('path');


app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/src',  express.static(__dirname + '/src'));
app.use(express.static(path.join(__dirname + '/sample'))); //  "public" off of current is root

app.listen(3333);
console.log("SERVER RUNNING PORT 3333");