import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('primeira rota criada com sucesso');
    res.json({success: true});
})

export { router };