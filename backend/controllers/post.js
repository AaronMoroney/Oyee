const Post = require('../models/post');
const fs = require('fs'); // file system

/*
function siteUrl(req) {
    return req.protocol + '://' + req.get('host');
}//working
*/

/*
function postImageUrl(req) {
    console.log('imageContent', req.body.imageContent)
    return siteUrl(req) + '/images/' + req.body.imageContent;
}//working
*/




//save a new post
exports.createPost = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host'); //working
    const post = req.body;
    console.log('CONTROLLER, req.body', req.body);
    const newPost = new Post({
        userId: post.userId,
        postTitle: post.postTitle,
        imageContent: url + '/images/' + post.imageContent, //undefined
        postContent: post.postContent,
        userName: post.userName,
        usersRead: post.userId
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
    console.log('POSTLIST: this is working');
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

//find one post, working
exports.getOnePost = (req, res, next) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
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

exports.updatePost = (req,res, next) => {
    const post = req.body;
    const url = req.protocol + '://' + req.get('host'); //working
    console.log('this is the posts log', post);
    Post.update(
        {usersRead: post.usersRead},
        {returning: true, where: {id: req.params.id}}
    ).then(
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



/*
//post modify
exports.updatePost = (req, res, next) => {
    const post = req.body;
    const url = req.protocol + '://' + req.get('host'); //working
    console.log('this is the posts log', post);
    const newPost = new Post({
        userId: post.userId,
        postTitle: post.postTitle,
        imageContent: url + '/images/' + post.imageContent, //undefined
        postContent: post.postContent,
        userName: post.userName,
        //usersRead comes from the frontend
        usersRead: post.usersRead
    }); //here ok
    Post.update({
        where: {
            id: req.params.id
        }
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
