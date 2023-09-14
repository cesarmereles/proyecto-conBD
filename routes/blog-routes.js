//*USAMOS EL ENRUTADOR DE LA LIBRERIA EXPRESS
const { Router } = require('express')   
const router = Router()                 
//!{ Router } <- extraemos la clase que hace el enrutamiento 

//const router = require('express').Router();  //!es equivalente al la instruccion de arriba

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

//!ESTO ES PARA OBTENER LOS USUARIOS CSR
// router.get('/obtener-usuarios', function(req, res) {
//   res.json(users)

// })

// router.get('/obtener-usuarios',  (req, res) => { 
//   res.json(users)
// })


router.get('/obtener-usuarios', function (req, res) {
  res.json(users)
})
// router.get('/ruta-protegida', function (req, res) {
//   res.send({name:'Cesar1'})
// })

//todo PARA PODER USAR ESTE MODULO TENGO QUE EXPORTAR LOS MODULOS DE RUTAS
module.exports = router;