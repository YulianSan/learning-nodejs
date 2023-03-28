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
            const response = await User.create({
                username : req.body.username,
                password : req.body.password
            });

            res.status(201).json({response, msg: 'Criado com sucesso'})
        }catch(err){
            console.log(err);
            res.end('');
        }
    }
}


module.exports = UserController;