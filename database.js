//!instancia de conexion a la base de datos
const { Sequelize, DataTypes } = require('sequelize'); 

// Instancia para la configuracion de la conexion
const sequelize = new Sequelize('pruebabd', 'root', '', {
    host: 'localhost',
    dialect:'mysql' 
});


/* lo exporto para poder usar en cualquier otra parte de la aplicacion, para realizar 
lo enviamos como objeto para poder asi realizar varias exportaciones
*/
module.exports = {
    sequelize,
    DataTypes,
    Sequelize
}