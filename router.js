const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    console.log(req, res);
    res.end('isso')
})

module.exports = router;