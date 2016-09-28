const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const Readable = require('stream');

const loadDict = (query) => (req, res) => {
    const queryPath = path.join(__dirname, '..', 'dict', `${query}.json`);
    const stream = fs.createReadStream(queryPath);
    stream.pipe(res);
}

router.get('/architecture', loadDict('architecture'));
router.get('/tags', loadDict('tags'));

module.exports = router;
