var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/', function(req, res) {
	res.sendFile('views/home.html', { root : __dirname });
});

router.get('/config', function(req, res) {
	res.sendFile('views/config.html', { root : __dirname });
});

router.get('/catan', function(req, res) {
	res.sendFile('views/Catan/catan.html', { root : __dirname });
});

module.exports.router = router;