module.exports = {
    HOST: '127.0.0.1',
    USER: 'root',
    PORT: '3306',
    PASSWORD: 'Nomadicfreelance1',
    DB: 'oyee',
    dialect: 'mysql',
    pool: {
        max: 5, 
        min: 1, 
        acquire: 30000,
        idle: 10000
    }
}

