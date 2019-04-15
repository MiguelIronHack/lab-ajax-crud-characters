require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();
const parser = require('body-parser');
const products = [];
// middlewares config
app.use(parser.json());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', hbs);
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  const data = {
    scripts: ['characters.js']
  };
  res.render('characters.hbs', data);
  //res.json;
});

app.get('/characters/:id', (req, res) => {
  res.send(products);
  res.json;
});

app.post('/character', (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send('ok');
});

const listener = app.listen(process.env.PORT, () => {
  console.log('runs @ http://localhost:' + listener.address().port);
});
