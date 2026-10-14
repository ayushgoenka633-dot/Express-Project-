const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Students list');
});

router.get('/:id', function (req, res) {
    res.send('Student ID: ' + req.params.id);
});

module.exports = router;