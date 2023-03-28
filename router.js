const router = require('express').Router();
const userRoute = require('./routes/user');

router.use('/user', userRoute);

router.get('/', (req, res)=>{
    res.end('teste');
})

module.exports = router;