const Post = require('../models/post');
//const fs = require('fs'); // file system - gives access to functions that allow you to modify the file system
//const { db }   = require('../models/post'); 
//const User = require('../models/user');

//save a new post
exports.createPost = (req, res, next) => {
    //because to send file, frontend sends as form, req.body.post
    const post = (req.body);
    const newPost = new Post({
        userId: post.userId,
        postTitle: post.postTitle,
        postContent: post.postContent,
    });
    console.log('newPost', newPost);
    newPost.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved!'
            });
        }
    ).catch(
       (error) => {
        res.status(400).json({
            errorMsg: 'cannot create post'
        });
       } 
    );
}

/*
//retrieve a list
exports.postList = (req, res, next) => {
    Post.find().then(
        (Post) => {
            res.status(200).json(Post);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
*/

