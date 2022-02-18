const url = "https://tema7-89db.restdb.io/rest/city";
const options = {
  headers: {
    "x-apikey": "61fcf7e43f215f310a37be57",
  },
};

let cities;
let filter = "alle";

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("div button");
  filterButtons.forEach((button) =>
    button.addEventListener("click", filterMenu)
  );
  fetchData();
});

async function fetchData() {
  const response = await fetch(url, options);
  cities = await response.json();
  display(cities);
  //console.log(json);
}

function filterMenu() {
  filter = this.dataset.category;
  document.querySelector(".selected").classList.remove("selected");
  this.classList.add("selected");

  display(cities);
}

function display() {
  const mainContent = document.getElementById("main_content");
  const template = document.querySelector("template").content;
  mainContent.textContent = "";

  cities.forEach((city) => {
    if (filter == city.kontinent || filter == "alle") {
      const clone = template.cloneNode(true);
      clone.querySelector("img").src = `billeder/${city.billede}`;
      clone.querySelector(".name").textContent = `${city.by}`;
      mainContent.appendChild(clone);
    }
  });
} //display all data
