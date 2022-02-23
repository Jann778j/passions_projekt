const url = "https://tema7-89db.restdb.io/rest/city";
const options = {
  headers: {
    "x-apikey": "61fcf7e43f215f310a37be57",
  },
}; //restdb.io

let cities; //json databasen
let filter = "alle"; //variabel som ændrer sig alt efter hvilken filterknap du klikker på

document.addEventListener("DOMContentLoaded", () => {
  //venter indtil siden er loadet før knapperne bliver funktionelle
  const filterButtons = document.querySelectorAll("div button");
  filterButtons.forEach((button) => button.addEventListener("click", filterMenu)); //knapperne kalder på filterMenu() funktionen, når man klikker
  fetchData(); //kalder på fetchData() funktionen
});

async function fetchData() {
  //kaldes når siden er loadet
  const response = await fetch(url, options);
  cities = await response.json();
  display(cities); //kalder på display() funktionen med cities som parameter
  //console.log(cities);
}

function filterMenu() {
  //bliver kaldt når knapperne klikkes på
  filter = this.dataset.category; //variablen ændres til den knap man klikker på
  document.querySelector(".selected").classList.remove("selected");
  this.classList.add("selected");

  display(cities); //kalder på display() funktionen med cities som parameter
}

function display() {
  //kaldes når databasen er hentet
  const mainContent = document.getElementById("main_content");
  const template = document.querySelector("template").content;
  mainContent.textContent = ""; //fjerner sektionens indhold

  cities.forEach((city) => {
    if (filter == city.kontinent || filter == "alle") {
      //hvis objektet har samme værdi som filterknappen
      const clone = template.cloneNode(true);
      clone.querySelector("img").src = `billeder/${city.billede}`;
      clone.querySelector(".name").textContent = `${city.by}`;
      clone.querySelector("article").addEventListener("click", () => showPopUp(city)); //gør kortene klikbart og kalder på showPopUp() funktionen med city som parameter
      mainContent.appendChild(clone);
    }
  });
}

const popUp = document.getElementById("popup");

function showPopUp(city) {
  //kaldes når et kort klikkes
  //console.log(city);
  popUp.style.display = "block";
  popUp.querySelector(".by").textContent = `${city.by}`;
  popUp.querySelector(".pop_up_img").src = `billeder/${city.billede}`;
  popUp.querySelector(".land").textContent = `${city.land}`;
  popUp.querySelector(".beskrivelse").textContent = `${city.beskrivelse}`;
  popUp.querySelector(".sprog").textContent = `Sprog: ${city.sprog}`;
  popUp.querySelector(".befolkning").textContent = `${city.by} har en befolkning på ${city.befolkning} mennesker.`;
}

document.getElementById("close").addEventListener("click", () => (popUp.style.display = "none")); //lukke knap

//kontak os section
//myFunction - alert
function myFunction() {
  alert("Tak for din indsendelse");
}
/*-------denne kode er lånt af w3/ this code is from w3 schools website - schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp ---*/
//tilbage til top knap
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
