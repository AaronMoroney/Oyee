const Post = require('../models/post');
//const fs = require('fs'); // file system - gives access to functions that allow you to modify the file system
//const { db }   = require('../models/post'); 
//const User = require('../models/user');

//save a new post
exports.createPost = (req, res, next) => {
    //because to send file, frontend sends as form, req.body.post
    const post = (req.body);
    console.log('request post',post);
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



//retrieve a list
exports.postList = (req, res, next) => {
    Post.findAll({
      
    }).then(
        (posts) => {
            res.status(200).json(posts);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}








/*
//find one post
exports.getOnePost = (req, res, next) => {
    Post.findOne({
        _id: req.params.id
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
*/
