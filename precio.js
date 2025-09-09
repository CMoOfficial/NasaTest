async function precio(){
    const response = await fetch('https://dummyjson.com/products/category/smartphones');
    const data = response.json();
    console.log(data[1].products.price);
}

precio();