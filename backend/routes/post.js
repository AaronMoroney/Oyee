const express = require('express');
const router = express.Router();
//auth
const auth = require('../middleware/auth');
//multer
const multer = require('../middleware/multer-config');
//controllers
const PostCtrl = require('../controllers/post');

//saving new posts to DB 
router.post('/', auth, multer, PostCtrl.createPost); 
//retrieve an array of posts (working)
router.get('/', auth, PostCtrl.postList); 
//single post (working)
router.get('/postpage/:id', auth, PostCtrl.getOnePost); 
//update (working)
router.put('/:id', auth, PostCtrl.updatePost);

//export
module.exports = router;
