//!instancia de conexion a la base de datos
//const { Sequelize, DataTypes } = require('sequelize'); 
const { Sequelize, DataTypes} = require('sequelize')

// Instancia para la configuracion de la conexion
// const sequelize = new Sequelize('pruebabd', 'root', '', {
//     host: 'localhost',
//     dialect:'mysql' 
// });


const sequelize = new Sequelize(
    process.env.NAME_DB, 
    process.env.USER_DB, 
    process.env.PASS_DB, 
{
    host: process.env.HOST_DB,
    dialect: process.env.DIALECT_DB,
    
});

const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa');
    } catch (error) {
        console.error('Error:', error);
    }
}


/* lo exporto para poder usar en cualquier otra parte de la aplicacion, para realizar 
lo enviamos como objeto para poder asi realizar varias exportaciones
*/
module.exports = {
    conectarDB,
    sequelize,
    Sequelize,
    DataTypes
}