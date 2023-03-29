const router = require('express').Router();
const userRoute = require('./routes/user');

router.use('/user', userRoute);


module.exports = router;