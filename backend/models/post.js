const { DataTypes } = require('sequelize');
const sequelize = require('./index');


//user model
const Post = sequelize.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    post: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dislikes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usersLiked: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usersDisliked: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usersRead: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
    }
})

module.exports = User;
