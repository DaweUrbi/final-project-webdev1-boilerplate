import AbstractView from "./AbstractView.js";
import { countryArr } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
    const cards1 = document.createElement("div");
    for (let i = 0; i <= countryArr.length - 1; i++) {
      const card = document.createElement("div");
      const country = countryArr[i];
      card.innerHTML = `
      <div class="countries-part-cards" >
      <div class="countries-image-parts">
      <img src="${countryArr[i].flagURL}">
      </div>
      <div>
      <div class="countries-information-part" id="divInfo">
      <h2>${country.name}</h2>
      <p>Population: ${country.population}</p>
      <p class="filter-region">Region: ${country.region}</p>
      <p>Capital: ${country.capital}</p>
      </div>
      <a class="link-viewpages" href=/countries/${country.cca3}>Go to a view page →</a>
      </div>
      </div>
    `;
      cards1.appendChild(card);
    }

    return `
    <header>
            <div class="header" id="header">
            <h1 id="dark-mode">Where in the world?</h1>
            <div class="header-btn" id="dark-light-mode" data-toggle="light">
            <span class="iconify" data-icon="bi:moon-fill" style="color: #ccc; font-size: 17px;"></span>
            <span id="span">Dark Mode</sapn>
            </div>
            </div>
        </header>
    <section class="countries-home">
    <div class="searching-part">
    <form class="searching-part-form" onsubmit="return false;">
    <span
            class="iconify searching-part-icon"
            data-icon="ant-design:search-outlined"
            style="color: #ccc; font-size: 14px"
          ></span>
    <input type="text" name="searching" placeholder="Search for a country..." class="searching-part-inpt" id="searching-input" style="border:none">
    </form>
    <select class="searching-part-slc" id="select">
    <option class="searching-part-slc-op" disabled selected hidden>Filter by Region</option>
    <option class="searching-part-slc-op" id="africa">Africa</option>
    <option class="searching-part-slc-op" id="america">Americas</option>
    <option class="searching-part-slc-op" id="asia">Asia</option>
    <option class="searching-part-slc-op" id="europe">Europe</option>
    <option class="searching-part-slc-op" id="oceania">Oceania</option>
    </select>
    </div>
    <div class="container" id="dark-mode">
    ${cards1.innerHTML}
    </div>
    </section>
    `;
  }
}
