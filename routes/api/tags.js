const express = require('express');

const router = express.Router();

// Tag Model
const Tag = require('../../models/Tag')

// @route   GET api/tags
// @desc    Get all tags
// @access  Public
router.get('/', (req, res) => {
    Tag.find()
        .sort({ name: 1 })
        .then(items => res.json(items));
});

module.exports = router;