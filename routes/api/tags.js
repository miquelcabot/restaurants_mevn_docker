const express = require('express');
const router = express.Router();

// Tags Model
const Tags = require('../../models/Tags')

// @route   GET api/tags
// @desc    Get all tags
// @access  Public
router.get('/', (req, res) => {
    Tags.find()
        .sort({ name: 1 })
        .then(items => res.json(items));
});

module.exports = router;