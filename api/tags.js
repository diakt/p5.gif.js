const path = require('path');
const express = require('express');
const router = express.Router();
const request = require('request');

const tags = [
    "3d",
    "animation",
    "architecture",
    "art",
    "black and white",
    "cinemagraph",
    "collage",
    "design",
    "geometry",
    "glitch",
    "illustration",
    "loop",
    "mash up",
    "morph",
    "photography",
    "pixel",
    "psychedelic",
    "sculpture",
    "timelapse",
    "transparent",
    "typography"
];

const tagsJson = JSON.stringify(tags);

router.get('/', (req, res) => res.end(tagsJson));

module.exports = router;
