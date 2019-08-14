'use strict';
const express            = require('express');
const compress           = require('compression');
const path               = require('path');
const config             = require('./config/config.js');

//to throw uncaught exception error
process.on('uncaughtException',  (exception) => {
  console.log(JSON.stringify(exception));
  console.log(exception.stack);
});

const app = express();

//gzip response
app.use(compress());

app.enable('trust proxy');

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join('./dist/')));

app.get('*', (req, res)=> {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(config.PORT, () => {
  console.log('App running on' + config.PORT);
});
