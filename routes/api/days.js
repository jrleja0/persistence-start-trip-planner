var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;

// GET, POST, PUT, DELETE
// :id/:type
router.get('/', (req, res, next) => {
  Day.findAll()
  .then(daysArray => {
    res.json(daysArray);
  })
})

router.get('/:id/:type',(req, res, next) => { // query database
  // req.params.id
  // req.params.type
  console.log('hello');
})

router.post('/', (req, res, next) => {
  //req.params.id
  Day.create(req.body)
  .then(() => {
    res.json(req.body);
  })
})

router.post('/:id/:type',(req, res, next) => {// adding a DAY
  // req.params.id
  // req.params.type
})

router.put('/:id/:type',(req, res, next) => {// EDITING attractions
  // req.params.id
  // req.params.type
})

router.delete('/:id/:type',(req, res, next) => {// DELETE a day
  // req.params.id
  // req.params.type
})

module.exports = router;
