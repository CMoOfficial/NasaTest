async function prueba(){
    const response = await fetch('https://dummyjson.com/users/1');
    const data = await response.json();
    console.log(data.firstName);
    console.log(data.email);
    console.log(data.age);
    console.log(data.role);
    return data;
}

prueba();


