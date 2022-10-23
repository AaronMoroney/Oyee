//requirements
const Post = require('../models/post');

function siteUrl(req) {
    return req.protocol + '://' + req.get('host');    
}

function postImageUrl(req) {
    return siteUrl(req) + '/images/' + req.file.filename;
}

//save a new post 
exports.createPost = (req, res, next) => {
    let post = (req.body);
    //req protocal, http, create the string
    const newPost = new Post({
        userId: post.userId,
        userName: post.userName,
        postTitle: post.postTitle,
        imageContent: postImageUrl(req),
        postContent: post.postContent,
        usersRead: post.userId
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
            errorMsg: 'cannot create Post'
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
