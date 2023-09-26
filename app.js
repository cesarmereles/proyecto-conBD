//!importaciones de modulos
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('ejs')
const path = require('path');

const { sequelize, conectarDB } = require('./database');

const app = express()
const port = process.env.PORT || 4000

conectarDB();
//*==================================================================================================================
                //todo COMENTARIOS
//todo middleware
//*asi se crea politicas de cors para crear listas blancas
// app.use(cors({
//     origin: '*', 
//     origin: 'http://localhost:3000', 
// }))
//*==================================================================================================================


app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //!para que el servidor comprenda datos en json
app.set('view engine', 'ejs')  //todo asi se establece una variable en el servidor
                               //todo 'view engine', 'ejs' esto hace referencia a la extension 
                               //todo y va a comprender el servidor ya podemos trabajar con motor de plantillas 

//todo configuracion de archivos estaticos para la carpeta publica
app.use(express.static(path.join(__dirname, 'public')))   //!express nos permite crear esa url estatica


//!RUTAS PARA SABER DONDE ESTAN LAS RUTAS TENGO QUE IMPORTAR
// const rutaBlog = require('./routes/blog-routes')
// app.use(rutaBlog);
app.use(require('./routes/blog-routes'))
//app.use(require('./routes/user-routes'))


app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`))