//*USAMOS EL ENRUTADOR DE LA LIBRERIA EXPRESS
const { Router } = require('express')   

const { getPosts, newPost, updatePosts, deletePosts } = require('../controllers/blog.constroller')
const router = Router()                 
//!{ Router } <- extraemos la clase que hace el enrutamiento 


// const users = [
//   {
//     username:'CesarDev',
//     name: 'Cesar',
//     lastname:'Mereles'
//   },
//   {
//     username:'MariaDev',
//     name: 'Maria',
//     lastname:'Podkowa'
//   },
//   {
//     username:'IgnacioDev',
//     name: 'Ignacio',
//     lastname:'Mereles'
//   }
// ]


//todo rutas

//============================================
//  RUTAS PARA RENDERIZAR VISTAS 
//============================================
router.get('/', (req, res) => {
  //res.render('home.ejs', {users})
  // res.render('home.ejs')
  res.render('index')

})
router.get('/admin', (req, res) => {
  res.render('admin')

})

//============================================
//  RUTAS PARA MANEJAR DATOS 
//============================================

router.get('/publicaciones', getPosts)

router.post('/publicacion', newPost)

router.put('/publicacion/:id', updatePosts)

router.delete('/publicacion/:id',deletePosts)

//todo PARA PODER USAR ESTE MODULO TENGO QUE EXPORTAR LOS MODULOS DE RUTAS
module.exports = router;