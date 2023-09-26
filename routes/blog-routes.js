//*USAMOS EL ENRUTADOR DE LA LIBRERIA EXPRESS
const { Router } = require('express')   

const { getPosts, newPost, updatePosts, deletePosts } = require('../controllers/blog.constroller')
const router = Router()                 
//!{ Router } <- extraemos la clase que hace el enrutamiento 


//todo rutas

//============================================
//  RUTAS PARA RENDERIZAR VISTAS 
//============================================
router.get('/', (req, res) => {
  res.render('index')
})
router.get('/admin', (req, res) => {
  res.render('admin')
})



//============================================
//  RUTAS PARA MANEJAR DATOS 
//============================================
//!CONSULTAR
router.get('/publicaciones', getPosts)

//!INSERTAR
router.post('/publicacion', newPost)

//!ACTUALIZAR
router.put('/publicacion/:id', updatePosts)

// Obtener una publicación
//router.get('/api/publicacion/:id', obtenerPublicacion)


router.delete('/publicacion/:id',deletePosts)

//todo PARA PODER USAR ESTE MODULO TENGO QUE EXPORTAR LOS MODULOS DE RUTAS
module.exports = router;

//res.render('home.ejs', {users})
  // res.render('home.ejs')