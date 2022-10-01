
const bcrypt = require('bcrypt'); //import bcrypt 
const User = require('../models/user.js'); //import user model 
const jwt = require('jsonwebtoken'); //import Jwt

//signup
exports.signup = (req, res, next) => {
    //10 = number of salting iteration
    bcrypt.hash(req.body.userPassword, 10).then(
        (hash) => {
            const user =  new User({
                userName: req.body.userName,
                userPassword: hash //req.body.userPassword,
            });
            console.log(req.body.userName)
            console.log(req.body.userPassword)
            user.save().then(
                () => {
                    res.status(201).json({
                        Msg: 'new user registered successfully!'
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
exports.login = (req, res, next) => {
    //sequelize findOne
    User.findOne({ 
        where: {userName: req.body.userName },
        }).then(
        (user) => {
            //if no user
            if (!user) {
                return res.status(401).json({
                    errorMsg: 'User cannot be found'
                });
            }
            //bcrypt compare hashed password
            bcrypt.compare(req.body.userPassword, user.userPassword).then(
                (valid) => {
                    if(!valid) {
                        return res.status(401).json({
                            errorMsg: 'incorrect user password, please try again'
                        });
                    }
                    const token = jwt.sign(
                         { userId: user._id},
                         'RANDOM_VERY_LONG_VERY_CRYPTIC_TOKEN',
                         { expiresIn: '12h'});
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            })
        }
    )
}

