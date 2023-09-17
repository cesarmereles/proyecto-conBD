//*USAMOS EL ENRUTADOR DE LA LIBRERIA EXPRESS
const { Router } = require('express')   

const { getPosts, newPost } = require('../controllers/blog.constroller')
const router = Router()                 
//!{ Router } <- extraemos la clase que hace el enrutamiento 


const users = [
  {
    username:'CesarDev',
    name: 'Cesar',
    lastname:'Mereles'
  },
  {
    username:'MariaDev',
    name: 'Maria',
    lastname:'Podkowa'
  },
  {
    username:'IgnacioDev',
    name: 'Ignacio',
    lastname:'Mereles'
  }
]


//todo rutas

//todo servidor en escucha
router.get('/', function(req, res) {
   
  res.render('home.ejs', {users})

})

router.post('/nueva-publicacion', newPost)

//para obtener las publicaciones
router.get('/listado-de-publicaciones', getPosts)


//todo PARA PODER USAR ESTE MODULO TENGO QUE EXPORTAR LOS MODULOS DE RUTAS
module.exports = router;