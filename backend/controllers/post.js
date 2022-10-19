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


/*
//fine one post to mark as 'viewed'
exports.getOnePost = (req, res, next) => {
    const id = req.params.id;
    console.log('id log', id);
    Post.findByPk(id).then(
        (post) => {
            res.status(200).json({
                userId: post.userId,
                postTitle: post.postTitle,
                imageContent: url + '/images/' + post.imageContent,
                postContent: post.postContent,
                id: post.id,
                userName: post.userName
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
*/



