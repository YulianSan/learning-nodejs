const express = require('express');
const app = express();

// para poder usar o arquivo .env
require('dotenv').config();
const router = require('./router');

app.use(router);

app.listen(3000, ()=>{ console.log('server running!')});