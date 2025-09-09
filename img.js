const apiUrl = "https://dummyjson.com/users/1";

async function getUsuario() {
    const response = await fetch(apiUrl);
    const usuario = await response.json();

    const ul = document.getElementById("usuarios");
    if (!ul) {
        console.error('No se encontró el elemento con id "usuarios"');
        return;
    }

    const li = document.createElement("li");
    li.textContent = `Nombre: ${usuario.firstName} ${usuario.lastName} | Correo: ${usuario.email} | Edad: ${usuario.age} | Role: ${usuario.role}`;
    ul.appendChild(li);

    console.log(usuario);
}

getUsuario();