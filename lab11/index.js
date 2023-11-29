const button = document.querySelector("button");
const p = document.querySelector("p");

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const data = await response.json();

  console.log(data);

  p.innerHTML = data.name;
}

button.addEventListener("click", () => fetchData());
