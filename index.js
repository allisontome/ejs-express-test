const express = require('express');
const app = express();
const { json, urlencoded } = require('body-parser');
const task = require('./routes/task/task');
const { data, backup } = require('./DB/db.js');

//Config
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(task);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  data()
    .then((respo) => JSON.parse(respo))
    .then((result) => {
      res.render('index', { tasks: result });
    })
    .catch((err) => {
      res.render('index');
      console.log(err);
    });
});

app.listen(8080, (req, res) => {
  console.log('app start!');
});
