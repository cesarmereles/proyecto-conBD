export const crearPublicaciones = async (datos) =>{
    const response= await fetch('/publicacion',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })
    const data = await response.json();
    return data
}


export const obtenerPublicaciones = async () =>{
    // Consulta al servidor por los datos de usuarios
    const response = await fetch('/publicaciones');
    const publicacion = await response.json();
    return publicacion;
}


export const actualizarPublicacion = (id)=>{

}
export const eliminarPublicacion = (id)=>{

}


//==================================================
//funcion para mostrar 
export const mostrarPublicaciones = (publicacion, elemento) => {
    let registros = '';
    publicacion.forEach(pub => {
        registros += `
           <section class='d-flex gap-2 cuadro'>
                <img src="${pub.url_imagen}" class='rounded' height="200" width="200">
                <div class='d-flex flex-column justify-content-between'>
                    <h4>${pub.titulo}</h4>
                    <p>${pub.detalle}</p>
                    <p>${pub.fecha_publicacion}</p>
                    <p>${pub.autor}</p>
                </div>
            </section>

        `
    });

    elemento.innerHTML = registros
}

