const Post = require('../models/post');
const fs = require('fs'); // file system


//save a new post
exports.createPost = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host'); //working
    const post = (req.body);
    console.log('request post', req.body);
    const newPost = new Post({
        userId: post.userId,
        postTitle: post.postTitle,
        imageContent: url +'/images/' + post.imageContent,
        postContent: post.postContent,
        userName: post.userName,
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
    //const id = req.params.id;
    //console.log('id log', id);
    Post.findByPk(id).then(
        (posts) => {
            res.status(200).json({
                userId: posts.userId,
                postTitle: posts.postTitle,
                imageContent: url +'/images/' + posts.imageContent,
                postContent: posts.postContent,
                id: posts.id
            });
        }
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
*/

//find one post
exports.getOnePost = (req, res, next) => {
    const id = req.params.id;
    console.log('id log', id);
    Post.findByPk(id) 
        .then((posts) => {
            res.status(200).json({
                userId: posts.userId,
                postTitle: posts.postTitle,
                imageContent: url +'/images/' + posts.imageContent,
                postContent: posts.postContent,
                id: posts.id
            });
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        })
}


/*
//find one post
exports.getOnePost = (req, res, next) => {
    //const id = req.params.id;
    //console.log('id log', id);
    Post.findByPk(id).then(
        (posts) => {
            res.status(200).json({
                userId: posts.userId,
                postTitle: posts.postTitle,
                imageContent: url +'/images/' + posts.imageContent,
                postContent: posts.postContent,
                id: posts.id
            });
        }
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
*


/*
exports.getOnePost = (req, res, next) => {
    Post.findOne({
        id: req.params.id
    }).then(
        (sauce) => {
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
*/

