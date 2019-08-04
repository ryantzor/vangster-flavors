const express = require('express');
const flavor = require('../dataaccess/flavor');

const router = express.Router();

router.post('/flavors', function(req, res) {
  res.send(flavor.create(req.body));
});

router.get('/flavors', function(req, res) {
  res.send(flavor.getAll());
})

router.get('/flavors/:id', function(req, res) {
  res.send(flavor.getAll());
});

router.put('/flavors', function(req, res) {
  res.send(flavor.update(req.body));
});

router.delete('flavors/:id', function(req, res) {
  console.log(req);
  res.send(flavor.remove(req.params.id));
});

module.exports = router;
