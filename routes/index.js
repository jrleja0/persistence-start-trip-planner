var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var dbAttractions = require('./api/db-attractions');


router.use('/routes/api/', dbAttractions);

router.get('/', (req, res, next) => {
  res.render('index');
});


// old code -- rendering nunjucks:
//   .spread(function(dbHotels, dbRestaurants, dbActivities) {
//     res.render('index', {
//       templateHotels: dbHotels,
//       templateRestaurants: dbRestaurants,
//       templateActivities: dbActivities
//     });
//   })
//   .catch(next);
// });





module.exports = router;
