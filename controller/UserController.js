const User = require('../model/User');

const UserController = {
    getUsers: async (req, res)=>{
        try{
            let users = await User.find();
            res.json(users);
        }catch(err){
            console.log(err);
            res.end(err);
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
            res.status(400).json(err);
        }
    },
    updateUsers: async (req, res)=>{
        try{
            const response = await User.updateOne(
                {'_id': req.params.id},
                {
                    username: req.body.username
                }
            );
            
            res.status(200).json({response, msg: 'Usuário atualizado com sucesso'});

        }catch(err){
            res.status(400).json(err);
        }
    },
    deleteUser: async (req, res)=>{
        try{
            const response = await User.deleteOne({_id: req.params.id});

            res.status(200).json({
                msg: 'Usuário excluído com sucesso',
                response
            });
        }catch(err){
            res.status(400).json(err);
        }
    },
    existUser: async (req, res, next)=>{
        try{
            let userExist = await User.exists({ _id: req.params.id });
            if(userExist){
                next();
            }
        }catch(err){
            res.status(404).json({msg: 'Não existe'});
        }
    }
}


module.exports = UserController;