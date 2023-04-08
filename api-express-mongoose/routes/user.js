const router = require('express').Router();
const userController = require('../controller/UserController');
const { canAccess } = require('../middleware/isAuth');

router.get('/', (req, res)=> userController.getUsers(req, res));
router.post('/',(req, res)=>{
    userController.createUsers(req, res);
});

router.put('/:id',
    userController.existUser,
    userController.updateUsers
    
);

router.delete('/:id',
    canAccess,
    userController.existUser,
    userController.deleteUser
);

module.exports = router;