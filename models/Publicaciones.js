const {Datatype, Sequelize, sequelize, DataTypes} = require('../database');

const Publicacion = sequelize.define('Publicacion',{
    titulo:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    detalle:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    url_imagen:{
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fecha_publicacion:{
        type: DataTypes.DATE,
        allowNull:true,
        defaultValue:sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    createdAt:true,
    updatedAt:true,
    deletedAt:true,
    tableName: 'publicaciones2'
}); 

module.exports = Publicacion;