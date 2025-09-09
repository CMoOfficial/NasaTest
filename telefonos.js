const URL_API = "https://dummyjson.com/products/category/smartphones";

const obtenerYMostrarProductos = async () => {
  try {
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    const productos = datos.products;

    const primerosTresProductos = productos.slice(0, 3);

    let precioTotal = 0;
    for (let i = 0; i < primerosTresProductos.length; i++) {
      precioTotal += primerosTresProductos[i].price;
    }

    mostrarProductos(primerosTresProductos);

    document.getElementById("total-price").textContent = precioTotal.toFixed(2);
  } catch (error) {
    console.error("Ocurrió un error al procesar los datos:", error);
  }
};

const mostrarProductos = (productos) => {
  const cuerpoTabla = document.getElementById("products-table-body");
  cuerpoTabla.innerHTML = "";

  productos.forEach((producto) => {
    const fila = document.createElement("tr");

    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = producto.title;

    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = producto.price.toFixed(2);

    fila.appendChild(celdaTitulo);
    fila.appendChild(celdaPrecio);

    cuerpoTabla.appendChild(fila);
  });
};

obtenerYMostrarProductos();
