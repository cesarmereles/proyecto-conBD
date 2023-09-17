const Publicacion = require('../models/Publicaciones')
const ctrol = {}


ctrol.newPost = async (req, res)=> {
    const {titulo,detalle,url_imagen,fecha_publicacion} = req.body;
    try {
      //!aca creamos la instancia del registro con el modelo de datos
      const publicaciones2 = await Publicacion.create({
        titulo,detalle,url_imagen,fecha_publicacion
      })
      res.send({msg:'Publicación creada con exito',publicaciones2})  
    } catch (error) {
      console.log('Error es: ',error)
      return res.status(500).json({
        msg:'Error al crear la Publicación'
      })  
    }
  }

ctrol.getPosts = async (req, res)=>{
    try {
      const publicaciones2 = await Publicacion.findAll() //devuelve todos los registros de la BD
      return res.json(publicaciones2)
      
    } catch (error) {
      console.log('Error es: ',error)
      return res.status(500).json({
        msg:'Error al consultar las Publicaciones'
      })  
    }
  }

  module.exports = ctrol