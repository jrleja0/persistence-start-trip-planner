var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day

router.get('/', (req, res, next) => {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .then(attractionsArray => {
    res.json(attractionsArray);
  })
  .catch(next);
});


module.exports = router;


// routes that:
// add days
// change days
// remove days
