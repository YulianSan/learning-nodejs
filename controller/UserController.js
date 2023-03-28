const User = require('../model/User');

const UserController = {
    getUsers: async (req, res)=>{
        try{
            let users = await User.find();
            res.json(users);
        }catch(err){
            console.log(err);
            res.end('');
        }
    },
    createUsers: async (req, res)=>{
        try{
            let { username, password } = req.body;
            const response = await User.create({
                username,
                password
            });

            console.log(req.body);
            res.status(201).json({response, msg: 'Criado com sucesso'})
        }catch(err){
            console.log(err);
            res.end('');
        }
    }
}


module.exports = UserController;