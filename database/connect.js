const mongoose = require('mongoose');

async function connect(){
    console.log(process.env.DATABASE_PASSWORD);
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.py6uv.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Sucesso ao conectar ao banco de dados');
    }catch(err){
        console.log(err);
    }
}

module.exports = connect;