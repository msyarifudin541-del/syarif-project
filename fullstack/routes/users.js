const express = require('express');
const router = express.Router();

// routing endpoit users utama
router.get('/', (req, res) => {
    res.json('HAHAHAHAHAHA')
});

module.exports = router;