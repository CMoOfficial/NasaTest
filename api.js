
fetch("https://dummyjson.com/users/1")
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);

