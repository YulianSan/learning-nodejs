const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const connect = require('./database/connect');

app.use((req, res, next)=>{
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    app.use(cors());
    next();
});
  
app.use(router);

require('dotenv').config();

connect();

app.use(express.json())


app.listen(3000, ()=>{ console.log('server running!')});