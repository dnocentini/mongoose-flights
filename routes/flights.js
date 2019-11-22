var express = require('express');
var router = express.Router();

//require controllers
var flightsCtrl = require('../controllers/flights');

/* /flights...*/
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);

module.exports = router;
