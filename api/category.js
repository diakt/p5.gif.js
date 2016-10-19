const path = require('path');
const config = require('./config');
const request = require('request');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const PassThrough = require('stream').PassThrough;
const tags = require('../dict/tags.json');

const searchGiphy = (req, res) => {
	let query = req.params.category || '';
	query = query.replace(/\s/g, '+');	
	query = tags.indexOf(query) > -1 ? query : 'default';

	const queryPath = path.join(__dirname, `./data/${query}.json`);
	const stream = new PassThrough();

	request(config.searchGiphy(query)).pipe(stream).pipe(res);
	
	// Archive data for dictionaries
	fs.stat(queryPath, (err, stats) => {
		if (err) {
			return;
		}

		if (stats.size === 0) {
			const json = fs.createWriteStream(queryPath);
			stream.pipe(json);			
		}
	})
}

router.get('/:category', searchGiphy);

module.exports = router;
