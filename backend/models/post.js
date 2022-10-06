const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//user model
const Post = sequelize.define('post', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    postTitle: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    postContent: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
    },
   
    /*
    likes: {
        type: DataTypes.INTEGER,
        primaryKey: false,
    },
    dislikes: {
        type: DataTypes.INTEGER,
        primaryKey: false,
    },
    usersLiked: {
        type: DataTypes.STRING,
        primaryKey: false, 
    },
    usersDisliked: {
        type: DataTypes.STRING,
        primaryKey: false,
    },
    */
})


module.exports = Post;
