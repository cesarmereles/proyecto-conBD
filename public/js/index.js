import {obtenerPublicaciones, mostrarPublicaciones} from './crud-post.js';


document.addEventListener('DOMContentLoaded', async ()=>{
    const publicaciones = await obtenerPublicaciones();
    const listado = document.querySelector('#listado-publicaciones')
    mostrarPublicaciones(publicaciones,listado)
})
