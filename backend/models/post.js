const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//user model
const Post = sequelize.define('post', {
    userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    postTitle: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    imageContent: {
        type: DataTypes.STRING,
    },
    imageContent: {
        type: DataTypes.STRING,
    },
    imageContent: {
        type: DataTypes.STRING,
    },
    imageContent: {
        type: DataTypes.STRING,
    },
    postContent: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
    usersRead: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
    usersRead: {
        type: DataTypes.JSON, 
        allowNull: false,
    }
})


module.exports = Post;
