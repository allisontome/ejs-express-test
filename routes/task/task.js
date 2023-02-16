const express = require('express');
const fs = require('fs');
const router = express.Router();
const { save, remove } = require('../.././DB/db');

router.get('/task/new', (req, res) => {
  res.render('new/new');
});

router.post('/task/new', (req, res) => {
  let { task, date } = req.body;
  save({
    task: task,
    date: date,
    id: new Date().getTime(),
  });
  res.redirect('/task/new');
});

router.post('/task/delete', (req, res) => {
  let { id } = req.body;
  remove(id);
  res.redirect('/');
});

module.exports = router;
