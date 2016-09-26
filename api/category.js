var path = require('path');
var config = require('./config');
var request = require('request');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var PassThrough = require('stream').PassThrough;

router.get('/', searchGiphy());
router.get('/architecture', searchGiphy('architecture'));
router.get('/cinemagraph', searchGiphy('cinemagraph'));

function searchGiphy(query) {
	query = query || 'default';
	let queryPath = path.join(__dirname, `./data/${query}.json`);
	
	return function (req, res) {
		let stream = new PassThrough();		
		request(config.searchGiphy(query)).pipe(stream).pipe(res);
		
		if (!fs.stat(queryPath)) {
			let json = fs.createWriteStream(queryPath);
			stream.pipe(json);			
		}
	}	
}

module.exports = router;
