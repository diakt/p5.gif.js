var path = require('path');
var express = require('express');
var router = express.Router();

/* GET build home page. */
router.get('/', (req, res) => {
  	res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = router;
