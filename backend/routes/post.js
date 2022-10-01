const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); //have
const postCtrl = require('../controllers/post'); //have
const multer = require('../middleware/multer-config') //have

//saving new posts to DB 
router.post('/', auth, multer, postCtrl.createPost);
//retrieve an array of posts
router.get('/', auth, SauceCtrl.SaucesList); 
