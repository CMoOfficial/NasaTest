const URL_API = "https://dummyjson.com/users/1";

const mostrarUsuario = async () => {
  try {
    const respuesta = await fetch(URL_API);
    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    const usuarioBody = document.getElementById("usuario-body");
    usuarioBody.innerHTML = "";
    const filaNombre = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = `Nombre: ${datos.firstName} ${datos.lastName}`;
    filaNombre.appendChild(celdaNombre);
    usuarioBody.appendChild(filaNombre);

    const filaCorreo = document.createElement("tr");
    const celdaCorreo = document.createElement("td");
    celdaCorreo.textContent = `Correo: ${datos.email}`;
    filaCorreo.appendChild(celdaCorreo);
    usuarioBody.appendChild(filaCorreo);

    const filaEdad = document.createElement("tr");
    const celdaEdad = document.createElement("td");
    celdaEdad.textContent = `Edad: ${datos.age}`;
    filaEdad.appendChild(celdaEdad);
    usuarioBody.appendChild(filaEdad);

    const filaRol = document.createElement("tr");
    const celdaRol = document.createElement("td");
    celdaRol.textContent = `Rol: ${datos.role}`;
    filaRol.appendChild(celdaRol);
    usuarioBody.appendChild(filaRol);
  } catch (error) {
    console.error("Ocurrió un error al obtener el usuario:", error);
  }
};

mostrarUsuario();
