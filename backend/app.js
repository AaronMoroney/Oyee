//import 
const express = require ('express');
const app = express();
const path = require('path');
//body parser
app.use(express.json());

//routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

//Cors 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//p6 has /api/.. check?
app.use('/posts', postRoutes); 
app.use('/auth', userRoutes); 

module.exports = app;