const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//user model
const User = sequelize.define('user', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    userCompanyPosition: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    userGender: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    userImageContent: {
        type: DataTypes.STRING,
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
}, {
        timestamps: true,
});

module.exports = User;











    