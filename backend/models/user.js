const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//user model
const User = sequelize.define('user', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userID: {
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












    