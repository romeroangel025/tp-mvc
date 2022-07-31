const express = require('express');
const app = express();
const port = 3000;

const mainRouter = require("./routers/main.js");

app.use(express.static("public"));

app.use('/', mainRouter)




app.listen(port, ()=>{
    console.log('Servidor funcionando en localhost:3000 ');
    });
    
