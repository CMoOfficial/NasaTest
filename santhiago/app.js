window.addEventListener('load', obtenerDatos);

function obtenerDatos(){
    const rutaApi = 'https://dummyjson.com/users/1'

    fetch(rutaApi)
        .then(response => response.json())
        .then(result => mostrarDatos(result))
}

function mostrarDatos({firstName,email,age,role}){
    const nombre = document.querySelector('#nombre');
    nombre.innerHTML = firstName;

    const correo = document.querySelector('#correo');
    correo.innerHTML = email;

    const edad = document.querySelector('#edad');
    edad.innerHTML = age;

    const rol = document.querySelector('#rol');
    rol.innerHTML = role;

    const imagen = document.querySelector('#imagen');
        imagen.innerHTML = `<img src="https://dummyjson.com/image/400x200/0080/ffffff?text=Hello+UMG%5C">`;
}