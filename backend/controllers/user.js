const mysql = require('mysql'); //import mysql
const bcrypt = require('bcrypt'); //import bcrypt 
const User = require('../models/user.js'); //import user model 
//const jwt = require('jsonwebtoken');

//signup
exports.signup = (req, res, next) => {
    console.log(req.body.userName)
    console.log(req.body.userPassword)
    //10 = number of salting iteration
    bcrypt.hash(req.body.userPassword,10).then(
        (hash) => {
            const user =  new User({
                userName: req.body.userName,
                userPassword: req.body.userPassword,
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        errorMsg: 'new user registered successfully!'
                    });
                }
            ).catch(
                (error) => {
                    console.error(error)//500 server error
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
};

//login

