//import 
const express = require ('express');
const app = express();
//const path = require('path');
const userRoutes = require('./routes/user');
//const mysql = require('mysql');

app.use(express.json());
//Cors 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//models
const db = require('./models/user');

//app.use('/api/auth', userRoutes);
app.use('/', userRoutes); 

module.exports = app;