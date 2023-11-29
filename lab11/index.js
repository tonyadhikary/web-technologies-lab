const button = document.querySelector("button");
const p = document.querySelector("p");

let counter = 1;

function fetchData() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  // const data = await response.json();

  fetch(`https://jsonplaceholder.typicode.com/users/${counter}`).then(
    (response) => {
      response.json().then((data) => {
        p.innerHTML = data.name;
      });
    }
  );
  // p.innerHTML = data.name;
  counter++;

  if (counter > 10) {
    counter = 1;
  }
}

button.addEventListener("click", () => fetchData());
