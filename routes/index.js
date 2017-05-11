var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var dbAttractions = require('./api/db-attractions');
var days = require('./api/days');

router.use('/routes/api/db-attractions', dbAttractions);
router.use('/routes/api/days',days);


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
