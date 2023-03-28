const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controller/UserController');

router.get('/', (req, res)=> userController.getUsers(req, res));
router.post('/', 
    body('username').isLength({min:5, max: 255}),
    body('password').isLength({min:5, max: 255}),
    (req, res)=>{
        const error = validationResult(req);
        if(!error.isEmpty())
            res.status(400).json({errors: error.array()})
        else
            userController.createUsers(req, res);
        
    });

module.exports = router;