window.addEventListener('load', obtenerDatos);

function obtenerDatos(){
    const rutaApi = 'https://dummyjson.com/products/category/smartphones'

    fetch(rutaApi)
        .then(response => response.json())
        .then(result => mostrarDatos(result))
}

function mostrarDatos({productos}){
    const productos = document.querySelector('#productos');
    productos.innerHTML = products;
}