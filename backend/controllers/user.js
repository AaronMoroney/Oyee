const bcrypt = require('bcrypt'); //import bcrypt 
const User = require('../models/user'); //import user model 
const Post = require('../models/post');
const jwt = require('jsonwebtoken'); //import Jwt

//functions
function siteUrl(req) {
    return req.protocol + '://' + req.get('host');    
}

function userImageUrl(req) {
    return siteUrl(req) + '/images/' + req.file.filename;
}


//save a new post
exports.signup = (req, res, _) => {
    let user = (req.body);
    bcrypt.hash(user.userPassword, 10).then(
        (hash) => {
            const newUser = new User ({
            userName: user.userName,
            userPassword: hash,
            userEmail: user.userEmail,
            userCompanyPosition: user.userCompanyPosition,
            userGender: user.userGender,
            userImageContent: userImageUrl(req),
        });
        console.log(newUser);
        newUser.save().then(
            () => {
                res.status(201).json({
                    Msg: 'new user registered successfully!'
                });
            }
        ).catch(
            (_) => {
            res.status(400).json({
                errorMsg: 'cannot create user'
            })
        })
    });
};

//login
exports.login = (req, res, _) => {
    let user = (req.body);
    User.findOne({ 
        where: {userName: user.userName }, 
    }).then(
        (user) => {
            //if no user
            if (!user) {
                return res.status(401).json({
                    errorMsg: 'User cannot be found'
                });
            }
            //bcrypt compare hashed password, with password assigned on signup
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
                        userId: user.userId, 
                        userName: user.userName,
                        token: token,
                        userEmail: req.body.userEmail,
                        userCompanyPosition: req.body.userCompanyPosition,
                        userGender: req.body.userGender,
                        userImageContent: req.body.userImageContent,
                });
            }).catch(
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
    );
};

//get one user, (logged in)
exports.getOneUser = (req, res, _) => {
    const id = req.params.userId;
    User.findByPk(id).then(
        (user) => {
            res.status(200).json({
                userName: user.userName,
                userEmail: user.userEmail,
                userCompanyPosition: user.userCompanyPosition,
                userGender: user.userGender,
                userImageContent: user.userImageContent,
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

//get one other user
exports.getOtherUser = (req, res, _) => {
    const id = req.params.userId;
    console.log('id log', id);
    User.findByPk(id).then(
        (user) => {
            res.status(200).json({
                userName: user.userName,
                userEmail: user.userEmail,
                userCompanyPosition: user.userCompanyPosition,
                userGender: user.userGender,
                userImageContent: user.userImageContent
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

/* 
** |Delete user (logged in), need to destroy posts in DB by that user first
*/

exports.deleteUser = (req, res, _) => {
    const userId = req.params.userId;
    //destroy any posts on user table that have same id as user ID from req.params
    Post.destroy({ 
        where: {
            userId: userId
        }
        }).then(
        //find the user from users table + destroy
        User.findByPk(userId).then( 
            (user) => {
                user.destroy({ userId: userId }).then(
                () => {
                    res.status(200).json({
                        message: 'user deleted!'
                    });
                }
                ).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                    }
                );
            }
        )
    );
}