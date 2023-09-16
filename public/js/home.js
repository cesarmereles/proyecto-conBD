
const btnUsers = document.querySelector('.btn-get-users');



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