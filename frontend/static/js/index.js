import { getCountries } from "./countries.js";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const brazil = {
    backgroundImage: "static/css/homepage/brazil.jpg",
    countryName: "Brazil",
    flag: "static/css/flag/brazil.png",
    population: "Population: 212,559,409",
    region: "Region: Americas",
    capital: "Capital: Brasília",
  };
  const canada = {
    backgroundImage: "static/css/homepage/canada.jpg",
    countryName: "Canada",
    flag: "static/css/flag/canada.png",
    population: "Population: 38,005,238",
    region: "Region: Americas",
    capital: "Capital: Ottawa",
  };
  const czech = {
    backgroundImage: "static/css/homepage/czech.jpg",
    countryName: "Czech Republic",
    flag: "static/css/flag/czech.png",
    population: "Population: 10,698,896",
    region: "Region: Europe",
    capital: "Capital: Prague",
  };
  const france = {
    backgroundImage: "static/css/homepage/france.jpg",
    countryName: "France",
    flag: "static/css/flag/france.png",
    population: "Population: 67,391,582",
    region: "Region: Europe",
    capital: "Capital: Paris",
  };
  const germany = {
    backgroundImage: "static/css/homepage/germany.jpg",
    countryName: "Germany",
    flag: "static/css/flag/germany.png",
    population: "Population: 83,240,525",
    region: "Region: Europe",
    capital: "Capital: Berlin",
  };
  const italy = {
    backgroundImage: "static/css/homepage/italy.jpg",
    countryName: "Italy",
    flag: "static/css/flag/italy.png",
    population: "Population: 59,554,023",
    region: "Region: Europe",
    capital: "Capital: Rome",
  };
  const japan = {
    backgroundImage: "static/css/homepage/japan.jpg",
    countryName: "Japan",
    flag: "static/css/flag/japan.png",
    population: "Population: 125,836,021",
    region: "Region: Asia",
    capital: "Capital: Tokyo",
  };

  const countriesHomepage = [
    brazil,
    canada,
    italy,
    czech,
    france,
    germany,
    japan,
  ];

  let index = 0;
  const imgElement = document.querySelector("#backgroundImage");
  const countryName = document.querySelector("#countryNameHP");
  const flag = document.querySelector("#flagHP");
  const population = document.querySelector("#populationHP");
  const region = document.querySelector("#regionHP");
  const capital = document.querySelector("#capitalHP");

  function change() {
    imgElement.style.backgroundImage = `url("${countriesHomepage[index].backgroundImage}")`;
    countryName.innerHTML = countriesHomepage[index].countryName;
    flag.src = countriesHomepage[index].flag;
    population.innerHTML = countriesHomepage[index].population;
    region.innerHTML = countriesHomepage[index].region;
    capital.innerHTML = countriesHomepage[index].capital;
    index > 5 ? (index = 0) : index++;
  }

  window.onload = function () {
    setInterval(change, 5000);
  };

  const btn = document.getElementById("dark-light-mode");
  console.log(btn);

  btn.addEventListener("click", function () {
    if (btn.getAttribute("data-toggle") == "dark") {
      document.body.classList.remove("background-dark-theme");
      document.body.classList.add("background-light-theme");
      btn.setAttribute("data-toggle", "light");
    } else {
      document.body.classList.remove("background-light-theme");
      document.body.classList.add("background-dark-theme");
      btn.setAttribute("data-toggle", "dark");
    }
  });

  const select = document.querySelector(".searching-part-slc");

  select.addEventListener("change", function (e) {
    let filteredCountries = [];
    // e.target.value
    console.log(e.target.value);
    for (let i = 0; i <= countryArr.length - 1; i++) {
      if (e.target.value === countryArr[i].region) {
        filteredCountries.push(countryArr[i]);
      }
    }

    const containerhtml = document.querySelector(".container");
    containerhtml.innerHTML = "";
    for (let i = 0; i <= filteredCountries.length - 1; i++) {
      // console.log(filteredCountries);
      const card = document.createElement("div");
      const filteredcountry = filteredCountries[i];
      // console.log(filteredcountry.name);
      card.innerHTML = `
    <a href=/countries/${filteredcountry.cca3}>Link</a>
    <div class="countries-part-cards">
    <div class="countries-image-parts">
    <img src="${filteredcountry.flagURL}">
    </div>
    <div class="countries-information-part">
    <h2>${filteredcountry.name}</h2>
    <p>Population: ${filteredcountry.population}</p>
    <p class="filter-region">Region: ${filteredcountry.region}</p>
    <p>Capital: ${filteredcountry.capital}</p>
    </div>
    </div>
    `;
      containerhtml.appendChild(card);
    }
  });

  const inputText = document.getElementById("searching-input");
  inputText.addEventListener(`keypress`, showUp);

  function showUp(e) {
    let searchinghtml = [];
    if (e.keyCode === 13) {
      for (let i = 0; i <= countryArr.length - 1; i++) {
        if (inputText.value === countryArr[i].name) {
          searchinghtml.push(countryArr[i]);
        }
      }
      const containerhtml = document.querySelector(".container");
      containerhtml.innerHTML = "";
      for (let i = 0; i <= searchinghtml.length - 1; i++) {
        const card = document.createElement("div");
        const searchingnames = searchinghtml[i];
        card.innerHTML = `
    <a href=/countries/${searchingnames.cca3}>Link</a>
    <div class="countries-part-cards">
    <div class="countries-image-parts">
    <img src="${searchingnames.flagURL}">
    </div>
    <div class="countries-information-part">
    <h2>${searchingnames.name}</h2>
    <p>Population: ${searchingnames.population}</p>
    <p class="filter-region">Region: ${searchingnames.region}</p>
    <p>Capital: ${searchingnames.capital}</p>
    </div>
    </div>
    `;
        containerhtml.appendChild(card);
      }
    }
  }
});

const countries = getCountries();
let countryObject = [];

export const countryArr = [];

countries.map((country) => {
  countryObject = {
    cca3: null,
    name: null,
    nativeName: null,
    population: null,
    region: null,
    subregion: null,
    capital: null,
    domain: null,
    currencies: null,
    languages: "",
    borderCountries: [],
    flagURL: null,
  };

  let languages = "";

  countryObject.cca3 = country.cca3;
  countryObject.name = country.name.common;

  if (country.name.nativeName != null)
    countryObject.nativeName = Object.values(country.name.nativeName)[0].common;
  else countryObject.nativeName = "This country does not have a native name";

  countryObject.population = country.population.toLocaleString();
  countryObject.region = country.region;

  if (country.subregion != null) countryObject.subregion = country.subregion;
  else countryObject.subregion = "This country does not have a sub region";

  if (country.capital != null) countryObject.capital = country.capital[0];
  else countryObject.capital = "This country does not have a capital";

  if (country.tld != null) countryObject.domain = country.tld[0];
  else countryObject.domain = "This country does not have a domain";

  if (country.currencies != null)
    countryObject.currencies = Object.values(country.currencies)[0].name;
  else countryObject.currencies = "This country does not have a currency";

  if (country.languages != null) languages = Object.values(country.languages);
  else countryObject.languages = "This country does not have a language";
  for (let i = 0; i < languages.length; i++) {
    countryObject.languages += languages[i];
    if (i != languages.length - 1) {
      countryObject.languages += ", ";
    }
  }

  countryObject.borderCountries = country.borders;
  countryObject.flagURL = country.flags.png;

  countryArr.push(countryObject);
});

// console.log(countryArr);
