export const crearPublicaciones = () =>{

}


export const obtenerPublicaciones = async () =>{
    // Consulta al servidor por los datos de usuarios
    const response = await fetch('/listado-de-publicaciones');
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
    publicacion.forEach(user => {
        registros += `
            <tr>
                <td>${user.id}</td>
                <td>${user.titulo}</td>
                <td>${user.detalle}</td>
                <td>${user.url_imagen}</td>
                <td>${user.fecha_publicacion}</td>
            </tr>
        `
    });

    elemento.innerHTML = registros
}