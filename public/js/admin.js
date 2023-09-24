import {crearPublicaciones} from './crud-post.js'



const nuevo_form = document.querySelector('#nuevo-form')

nuevo_form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const data = {
        titulo:document.querySelector('#titulo').value,
        detalle: document.querySelector('#detalle').value,
        url_imagen: document.querySelector('#url_imagen').value,
        fecha: document.querySelector('#fecha_publicacion').value,
    }
    //tengo que pasar en forma de objeto
    const respuesta = await crearPublicaciones(data)
    // console.log(respuesta);
    alert(respuesta.msg);
    location.href= '/'
})


