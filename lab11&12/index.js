const button = document.querySelector("button");
const p = document.querySelector("p");

let counter = 1;

function fetchData() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  // const data = await response.json();
  fetch("data.json").then((response) => {
    response.json().then((data) => {
      data = data[counter];
      p.innerHTML = `<h3>${data.name}</h3> <p>${data.email}</p> <p>${data.phone}</p> <p>${data.website}</p>`;
    });
  });
  // p.innerHTML = data.name;
  counter++;
  if (counter > 10) {
    counter = 1;
  }
}

button.addEventListener("click", () => fetchData());
