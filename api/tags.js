const path = require('path');
const express = require('express');
const router = express.Router();
const tags = require('../dict/tags.json');
const tagsJson = JSON.stringify(tags);

router.get('/', (req, res) => res.end(tagsJson));

module.exports = router;
