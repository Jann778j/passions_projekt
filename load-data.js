const url = "https://tema7-89db.restdb.io/rest/city";

const options = {
  headers: {
    "x-apikey": "61fcf7e43f215f310a37be57",
  },
};

async function getData() {
  const response = await fetch(url, options);
  const json = await response.json();
  show(json);
}

const mainContent = document.getElementById("main_content");
const template = document.querySelector("template").content;

function show(json) {
  console.log(json);
  json.forEach((city) => {
    const clone = template.cloneNode(true);
    clone.querySelector("img").src = `billeder/${city.billede}`;
    clone.querySelector(".name").textContent = `${city.by}`;
    mainContent.appendChild(clone);
  });
}

getData();
