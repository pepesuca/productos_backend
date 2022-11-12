const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `./src/database/database.sqlite`
});

const test_connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    };    
};

test_connection();

module.exports = sequelize;