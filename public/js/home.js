
const btnUsers = document.querySelector('.btn-get-users');
const btnPublicaciones = document.querySelector('.btn-get-publicaciones');



//todo DOMContentLoaded
// document.addEventListener('DOMContentLoaded',async ()=>{
//     const response = await fetch('/obtener-usuarios');
//     console.log(response);
// })

const mostrarDatos = (users, elemento) => {
    let registros = '';
    users.forEach(user => {
        registros += `
            <tr>
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.lastname}</td>
            </tr>
        `
    });

    elemento.innerHTML = registros
}

// Se añade un evento que escucha cuando el usuario hace clic en el botón
btnUsers.addEventListener('click', async () => {
    // Consulta al servidor por los datos de usuarios
    const response = await fetch('/obtener-usuarios');
    const users = await response.json();
    const tablaUsuarios = document.querySelector('#tabla-usuarios');
    // Modificar el DOM para mostrar los datos
    mostrarDatos(users, tablaUsuarios)
})

//=========================================================================
const mostrarPublicaciones = (publicacion, elemento) => {
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




btnPublicaciones.addEventListener('click', async () => {
    // Consulta al servidor por los datos de usuarios
    const response = await fetch('/listado-de-publicaciones');
    const publicacion = await response.json();
    const tablaPublicaciones = document.querySelector('#tabla-publicaciones');
    // Modificar el DOM para mostrar los datos
    mostrarPublicaciones(publicacion, tablaPublicaciones)
})
