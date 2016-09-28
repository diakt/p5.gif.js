const path = require('path');
const config = require('./config');
const request = require('request');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const PassThrough = require('stream').PassThrough;

const searchGiphy = (query) => (req, res) => {
	query = query || 'default';
	query = query.replace(/\s/g, '+');
	
	const queryPath = path.join(__dirname, `./data/${query}.json`);
	const stream = new PassThrough();

	request(config.searchGiphy(query)).pipe(stream).pipe(res);
	
	// Archive data for dictionaries
	if (!fs.stat(queryPath)) {
		const json = fs.createWriteStream(queryPath);
		stream.pipe(json);			
	}
}

router.get('/', searchGiphy());
router.get('/architecture', searchGiphy('architecture'));
router.get('/cinemagraph', searchGiphy('cinemagraph'));
router.get('/typography', searchGiphy('typography'));

module.exports = router;
