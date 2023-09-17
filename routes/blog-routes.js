//*USAMOS EL ENRUTADOR DE LA LIBRERIA EXPRESS
const { Router } = require('express')   
const Publicacion = require('../models/Publicaciones')
const router = Router()                 
//!{ Router } <- extraemos la clase que hace el enrutamiento 

//todo rutas

//todo servidor en escucha
router.get('/', function(req, res) {
   
  res.render('home.ejs', {users})

})

router.post('/nueva-publicacion', async (req, res)=> {
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
})

//para obtener las publicaciones
router.get('/listado-de-publicaciones', async (req, res)=>{
  try {
    const publicaciones2 = await Publicacion.findAll() //devuelve todos los registros de la BD
    return res.json(publicaciones2)
    
  } catch (error) {
    console.log('Error es: ',error)
    return res.status(500).json({
      msg:'Error al consultar las Publicaciones'
    })  
  }
})


//todo PARA PODER USAR ESTE MODULO TENGO QUE EXPORTAR LOS MODULOS DE RUTAS
module.exports = router;