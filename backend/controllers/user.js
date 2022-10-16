const bcrypt = require('bcrypt'); //import bcrypt 
const User = require('../models/user'); //import user model 
const jwt = require('jsonwebtoken'); //import Jwt

//signup
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.userPassword, 10).then(
        (hash) => {
            const user =  new User({
                userName: req.body.userName,
                userPassword: hash,
                userEmail: req.body.userEmail,
                userCompanyPosition: req.body.userCompanyPosition,
                userGender: req.body.userGender
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        Msg: 'new user registered successfully!'
                    });
                }
            ).catch(
                (error) => {
                    console.error(error)
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
    User.findOne({ where: {userName: req.body.userName }, }).then(
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
                    //createToken
                    const token = jwt.sign(
                        { userId: user.userId }, 
                        'RANDOM_VERY_LONG_VERY_CRYPTIC_TOKEN',
                        { expiresIn: '12h' });
                    res.status(200).json({
                        userId: user.userId, 
                        userName: user.userName,
                        token: token,
                        userEmail: req.body.userEmail,
                        userCompanyPosition: req.body.userCompanyPosition,
                        userGender: req.body.userGender
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

exports.getOneUser = (req, res, next) => {
    //params = router.get('/:userId', userCtrl.getOneUser);
    const id = req.params.userId;
    console.log('id log', id);
    User.findByPk(id).then(
        (user) => {
            res.status(200).json({
                userName: user.userName,
                userEmail: user.userEmail,
                userCompanyPosition: user.userCompanyPosition,
                userGender: user.userGender
            });
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getOtherUser = (req, res, next) => {
    //params = router.get('/:userId', userCtrl.getOneUser);
    const id = req.params.userId;
    console.log('id log', id);
    User.findByPk(id).then(
        (user) => {
            res.status(200).json({
                userName: user.userName,
                userEmail: user.userEmail,
                userCompanyPosition: user.userCompanyPosition,
                userGender: user.userGender
            });
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};




