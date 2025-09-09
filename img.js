const apiUrl = "https://dummyjson.com/products/category/smartphones";

async function mostrarPrecios() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Tomar los primeros 3 productos
    const primerosTres = data.products.slice(0, 3);

    // Obtener los precios y sumarlos
    const precios = primerosTres.map(producto => producto.price);
    const total = precios.reduce((acc, precio) => acc + precio, 0);

    // Mostrar los precios y el total
    const ul = document.getElementById("data");
    if (!ul) {
        console.error('No se encontró el elemento con id "data"');
        return;
    }

    primerosTres.forEach((producto, i) => {
        const li = document.createElement("li");
        li.textContent = `Producto: ${producto.title} | Precio: $${producto.price}`;
        ul.appendChild(li);
    });

    const liTotal = document.createElement("li");
    liTotal.textContent = `Total de los primeros 3 precios: $${total}`;
    ul.appendChild(liTotal);

    console.log({ precios, total });
}

mostrarPrecios();