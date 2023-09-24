const Publicacion = require('../models/Publicaciones')
//TODO INCLUYO TODA LA FUNCIONALIDAD DENTRO DE UN OBJETO ASI EXPORTO EL OBJETO PADRE
const ctrol = {}


ctrol.newPost = async (req, res)=> {
    const {titulo,detalle,url_imagen,fecha_publicacion} = req.body;
    try {
      //!aca creamos la instancia del registro con el modelo de datos
      const publicaciones2 = await Publicacion.create({
        titulo,detalle,url_imagen,fecha_publicacion
      })
      //!await publicaciones2.save() <- esto guarda la instancia que guardamos con sequelize
      await publicaciones2.save()
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

ctrol.updatePosts = async (req, res)=>{
  const {id} = req.params
  try {
    const publicacion = await Publicacion.findByPk(id)
    //!antes de setear esos valores hay que tener varias validaciones
    publicacion.set(req.body)

    //!ahora guardo en la base de datos
    await publicacion.save();
    return res.json({
      msg:'Publicación actualizada correctamente'
    })


  } catch (error) {
    console.log('Error es: ',error)
      return res.status(500).json({
        msg:'Error al actualizar la Publicacion'
      })  
  }
}

ctrol.deletePosts = async (req,res)=>{
  const {id} = req.params;;
  try {
    await Publicacion.destroy({
      where:{
        id
      }
    })
    return res.json({
      msg: 'Publicacion eliminada exitosamente'
    })
  } catch (error) {
    console.log('Error es: ',error)
    return res.status(500).json({
      msg:'Error al eliminar la Publicacion'
    })  
  }
}


//!EXPORTO EL OBJETO PADRE
module.exports = ctrol