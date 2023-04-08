const auth = {
    canAccess: async (req, res, next)=>{
        if(req.headers.authorization){
            next();
        }
        else{
            res.status(401).json({
                msg: 'Token ausente'
            });
        }
    }
}
module.exports = auth;