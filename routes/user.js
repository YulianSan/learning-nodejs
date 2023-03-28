const router = require('express').Router();
const userController = require('../controller/UserController');

router.get('/', (req, res)=> userController.getUsers(req, res));
router.post('/',(req, res)=> userController.createUsers(req, res));

module.exports = router;