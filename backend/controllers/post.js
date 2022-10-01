const fs = require('fs'); // file system - gives access to functions that allow you to modify the file system
const { db, updateOne, remove }   = require('../models/post'); //check?
const user = require('../models/user.js');

exports.createPost = (req, res, next) => {
    //because to send file, frontend sends as form, req.body.sauce
    let post = JSON.parse(req.body.post);
    const newPost = new Post({
        title: post.name,
        post: post.body,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
        userId: post.userId,
        usersRead: post.usersRead
    });
    newPost.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved!'
            });
        }
    ).catch(
       (error) => {
        res.status(400).json({
            errorMsg: 'cannot create sauce'
        });
       } 
    );
}

//find one sc
exports.getOneSauce = (req, res, next) => {
    Post.findOne({
        _id: req.params.id
    }).then(
        (post) => {
            res.status(200).json(sauce);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};