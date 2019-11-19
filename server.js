const express = require('express');
const app = express();
const Client = require('./controller/axios');
const myClient = new Client();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/vegconomist', function (req, res) {
  myClient.get_vegconomist().then(response => {
    res.send(response);
  });
});

app.get('/vegconomist/all', function (req, res) {
  myClient.get_multiple_posts().then(response => {
    res.send(response);
  });
});

app.get('/all', function (req, res) {
  myClient.get_all_publisher().then(response => {
    res.send(response);
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
