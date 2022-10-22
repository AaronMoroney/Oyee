const bcrypt = require('bcrypt'); //import bcrypt 
const User = require('../models/user'); //import user model 
const jwt = require('jsonwebtoken'); //import Jwt

//functions
function siteUrl(req) {
    return req.protocol + '://' + req.get('host');    
}

function userImageUrl(req) {
    return siteUrl(req) + '/images/' + req.file.filename;
}

//save a new post
exports.signup = (req, res, next) => {
    let user = (req.body);
    console.log(user);
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
            (error) => {
            res.status(400).json({
                errorMsg: 'cannot create user'
            })
        })
    });
};
/*
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
*/

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
                        userGender: req.body.userGender,
                        userImageContent: req.body.userImageContent,
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

//get one user, (logged in)
exports.getOneUser = (req, res, next) => {
    const id = req.params.userId;
    console.log('id log', id);
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
exports.getOtherUser = (req, res, next) => {
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

//Delete user (logged in)
exports.deleteUser = (req, res, next) => {
    //find one
    User.findByPk(id).then( 
        (user) => {
        //delete files from the image system created by that user    
        const filename = post.imageContent.split('/images/')[1]; 
        fs.unlink('images/' + filename, () => {
            if (!user) {
            res.status(404).json({
                error: new Error('no such thing')
            });
            }
            //if not logged in user
            if(post.userId !== req.auth.userId) {
            res.status(400).json({
                error: new Error('unauthorized request!')
            })
            }
            User.deleteOne({ userId: req.params.id }).then(
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
            ) 
        })
    });
}


