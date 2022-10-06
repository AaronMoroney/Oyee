module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'groupomania_db',
    dialect: 'mysql',
    pool: {
        max: 5, 
        min: 1, 
        acquire: 30000,
        idle: 10000
    }
}