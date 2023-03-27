const express = require('express');
const router = express.Router();
const connect = require('./database/connect');

connect();

router.get('/', function(){

    },
    function(req, res) {
        console.log(req, res);
        res.end('isso')
    });

module.exports = router;