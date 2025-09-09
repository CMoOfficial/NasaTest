
//pactica 1
fetch("https://dummyjson.com/users/1")
      .then(res => res.json())
      .then(data => {
        const info = `
          Nombre: ${data.firstName} ${data.lastName} <br>
          Correo: ${data.email} <br>
          Edad: ${data.age} <br>
          Rol: ${data.role}
        `;
        document.getElementById("usuario").innerHTML = info;
      });


//practica 2
const urlImagen = "https://dummyjson.com/image/400x200/000000/ffff00?text=Hola+Mundo";
document.getElementById("imagen").src = urlImagen;


//practica 3
fetch("https://dummyjson.com/products/category/smartphones")
    .then(res => res.json())
    .then(data => {
    const precios = data.products.slice(0, 3).map(p => p.price);
    const total = precios.reduce((a, b) => a + b, 0);

    document.getElementById("productos").innerHTML = `
        Precios: ${precios.join(", ")} <br>
        Total: ${total}
    `;
    });