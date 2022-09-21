"use strict";

const homePageMain = document.querySelector(".home-page-main");
const countryPageMain = document.querySelector(".country-page-main");
const backBtn = document.querySelector(".back-btn");

const onPageLoadParam = "all";

getPageLoadUrl();

// Function to load all countries on page load.
function getPageLoadUrl() {
  // According to API docs
  getAllCountries(onPageLoadParam);

  filter();
  search(onPageLoadParam);
}

// Function to handle filter
function filter() {
  const items = document.querySelector("#filter");
  items.addEventListener("change", (e) => {
    const filterParam = e.target.value;
    console.log(filterParam);
    if (filterParam === "#") {
      getAllCountries(onPageLoadParam);
      inputField.value = "";
    } else {
      getAllCountries(`region/${filterParam}`);
      inputField.value = "";
    }
  });
}

// Fuction to handle Search
function search(onPageLoadParam) {
  const inputField = document.querySelector("#search");
  inputField.addEventListener("input", () => {
    const searchTerm = inputField.value.toLowerCase();
    if (searchTerm) {
      getAllCountries(`name/${searchTerm}`);
    } else {
      // Show all countries if input field is empty (when user presses and holds backspace.)
      getAllCountries(onPageLoadParam);
    }
  });
}

// Function to handle all the fetches for HomePage and loader.
function getAllCountries(param) {
  const baseUrl = "https://restcountries.com/v2/";
  const loader = document.querySelector(".loader");
  loader.style.display = "block";

  fetch(baseUrl + param)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      updateDOMForHomePage(data);
      loader.style.display = "none";
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

const gridContainer = document.querySelector(".countries-container");
function updateDOMForHomePage(data) {
  gridContainer.innerHTML = "";
  data.forEach((country) => {
    // create elements
    const eachCountry = document.createElement("div");
    const flagContainer = document.createElement("div");
    const flagImage = document.createElement("img");
    const infoContainer = document.createElement("div");
    const countryName = document.createElement("h3");
    const countryInfoPop = document.createElement("p");
    const countryInfoReg = document.createElement("p");
    const countryInfoCap = document.createElement("p");
    const boldPop = document.createElement("span");
    const boldReg = document.createElement("span");
    const boldCap = document.createElement("span");
    const countryPopulation = document.createElement("span");
    const countryRegion = document.createElement("span");
    const countryCapital = document.createElement("span");

    // add classes
    gridContainer.classList.add("countries-container");
    eachCountry.classList.add("each-country");
    flagContainer.classList.add("flag-container");
    flagImage.classList.add("flag-image");
    infoContainer.classList.add("info-container");
    countryName.classList.add("country-name");
    countryInfoPop.classList.add("country-info-pop");
    countryInfoReg.classList.add("country-info-reg");
    countryInfoCap.classList.add("country-info-cap");
    boldPop.classList.add("bold-pop");
    boldReg.classList.add("bold-reg");
    boldCap.classList.add("bold-cap");
    countryPopulation.classList.add("country-population");
    countryRegion.classList.add("country-region");
    countryCapital.classList.add("country-capital");

    // append appropriate child elements
    gridContainer.append(eachCountry);
    eachCountry.append(flagContainer);
    flagContainer.append(flagImage);
    eachCountry.append(infoContainer);
    infoContainer.append(countryName);
    infoContainer.append(countryInfoPop);
    infoContainer.append(countryInfoReg);
    infoContainer.append(countryInfoCap);
    countryInfoPop.append(boldPop);
    countryInfoPop.append(countryPopulation);
    countryInfoReg.append(boldReg);
    countryInfoReg.append(countryRegion);
    countryInfoCap.append(boldCap);
    countryInfoCap.append(countryCapital);

    // update content as appropriate
    flagImage.src = country.flags.svg;
    flagImage.alt = "flag-img";
    boldPop.innerHTML = "Population: ";
    boldReg.innerHTML = "Region: ";
    boldCap.innerHTML = "Capital: ";
    countryName.innerHTML = country.name;
    countryPopulation.innerHTML = country.population;
    countryRegion.innerHTML = country.region;
    // sometimes, country.capital returns undefined.
    countryCapital.innerHTML = country.capital ? country.capital : "-";

    eachCountry.addEventListener("click", (e) => {
      homePageMain.style.display = "none";
      handleCountryClick(e, data);
    });
  });
}

// ////////////click
function handleCountryClick(e, data) {
  const clickedItem = e.target;
  if (clickedItem.classList.contains("country-name")) {
    console.log(clickedItem.innerHTML.toLowerCase());
    getSpecificCountryData(clickedItem.innerHTML.toLowerCase());
  }
}

function getSpecificCountryData(name) {
  const url = `https://restcountries.com/v2/name/${name}`;

  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      countryPageMain.style.display = "block";
      back();
      updateDOMForInfoPage(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

const flagSpecific = document.querySelector(".flag-image-specific");
const nativeNameSpecific = document.querySelector(".native-name-specific");
const populationSpecific = document.querySelector(".population-specific");
const regionSpecific = document.querySelector(".region-specific");
const subRegionSpecific = document.querySelector(".subregion-specific");
const capitalSpecific = document.querySelector(".capital-specific");
const topLevelDomainSpecific = document.querySelector(".top-level-domain-specific");
const currenciesSpecific = document.querySelector(".currencies-specific");
const languagesSpecific = document.querySelector(".languages-specific");
const bordersSpecific = document.querySelector(".borders-specific");
function updateDOMForInfoPage(data) {
  flagSpecific.src = data[0].flags.svg;
  nativeNameSpecific.innerHTML = `${data[0].nativeName}.`;
  populationSpecific.innerHTML = data[0].population;
  regionSpecific.innerHTML = `${data[0].region}.`;
  subRegionSpecific.innerHTML = `${data[0].subregion}.`;
  capitalSpecific.innerHTML = `${data[0].capital}.`;
  topLevelDomainSpecific.innerHTML = data[0].topLevelDomain;

  // console.log(data[0].currencies); //array
  // console.log(data[0].languages); //array
  // console.log(data[0].borders); //sometimes undefined, sometimes an array

  // clearing  content of parent before looping and appending
  currenciesSpecific.innerHTML = "";
  const currencies = data[0].currencies;
  currencies.forEach((currency) => {
    const eachCurrency = document.createElement("span");
    currenciesSpecific.append(eachCurrency);

    // Better text-formatting of the each language shown from the languages array.
    eachCurrency.innerHTML =
      currencies.indexOf(currency) === currencies.length - 1 ? `${currency.name}.` : `${currency.name}, `;
  });

  const languages = data[0].languages;
  // clearing  content of parent before looping and appending
  languagesSpecific.innerHTML = "";
  languages.forEach((language) => {
    const eachLanguage = document.createElement("span");
    // eachLanguage.innerHTML = "";
    languagesSpecific.append(eachLanguage);

    // Better text-formatting of the each language shown from the languages array.
    eachLanguage.innerHTML =
      languages.indexOf(language) === languages.length - 1 ? `${language.name}.` : `${language.name}, `;
  });

  const borderCountries = data[0].borders;
  // clearing  content of parent before looping and appending
  bordersSpecific.innerHTML = "";
  if (borderCountries) {
    borderCountries.forEach((borderCountry) => {
      const eachBorderCountry = document.createElement("button");

      // Has better representation with styles from this class, hence doesn't need formatting.
      eachBorderCountry.classList.add("border");
      bordersSpecific.append(eachBorderCountry);
      eachBorderCountry.innerHTML = borderCountry;

      // innerHTML of eachborderCountry will be used to fetch when any one of them is clicked.
      borderCountryInfo(eachBorderCountry);
    });
  } else {
    bordersSpecific.style.display = "inline-block";
    bordersSpecific.innerHTML = "No borders.";
  }
}

// Function to handle backBtn click
function back() {
  backBtn.addEventListener("click", () => {
    homePageMain.style.display = "block";
    countryPageMain.style.display = "none";
  });
}

//function to handle border countries click
function borderCountryInfo(borderCountries) {
  borderCountries.addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    getBorderCountryData(e.target.textContent);
  });
}
// function to fetch for borderCountry
function getBorderCountryData(code) {
  const url = `https://restcountries.com/v2/alpha/${code}`;
  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      // api returns slightly differently structured data when searching with name vs when searching with alpha code, hence can't reuse updateDomForInfoPage function.
      updateDOMForBorderCountryPage(data);
      back();
    })
    .catch((err) => {
      console.log(`error ${err}`);
      // Better Error handling.
    });
}

function updateDOMForBorderCountryPage(data) {
  flagSpecific.src = data.flags.svg;
  nativeNameSpecific.innerHTML = `${data.nativeName}.`;
  populationSpecific.innerHTML = data.population;
  regionSpecific.innerHTML = `${data.region}.`;
  subRegionSpecific.innerHTML = `${data.subregion}.`;
  capitalSpecific.innerHTML = `${data.capital}.`;
  topLevelDomainSpecific.innerHTML = data.topLevelDomain;

  // clearing  content of parent before looping and appending
  currenciesSpecific.innerHTML = "";
  const currencies = data.currencies;
  currencies.forEach((currency) => {
    const eachCurrency = document.createElement("span");
    currenciesSpecific.append(eachCurrency);

    // Better text-formatting of the each language shown from the languages array.
    eachCurrency.innerHTML =
      currencies.indexOf(currency) === currencies.length - 1 ? `${currency.name}.` : `${currency.name}, `;
  });

  const languages = data.languages;
  // clearing  content of parent before looping and appending
  languagesSpecific.innerHTML = "";
  languages.forEach((language) => {
    const eachLanguage = document.createElement("span");
    // eachLanguage.innerHTML = "";
    languagesSpecific.append(eachLanguage);

    // Better text-formatting of the each language shown from the languages array.
    eachLanguage.innerHTML =
      languages.indexOf(language) === languages.length - 1 ? `${language.name}.` : `${language.name}, `;
  });

  const borderCountries = data.borders;
  // clearing  content of parent before looping and appending
  bordersSpecific.innerHTML = "";
  if (borderCountries) {
    borderCountries.forEach((borderCountry) => {
      const eachBorderCountry = document.createElement("button");

      // Has better representation with styles from this class, hence doesn't need formatting.
      eachBorderCountry.classList.add("border");
      bordersSpecific.append(eachBorderCountry);
      eachBorderCountry.innerHTML = borderCountry;

      // innerHTML of eachborderCountry will be used to fetch when any one of them is clicked.
      borderCountryInfo(eachBorderCountry);
    });
  } else {
    bordersSpecific.style.display = "inline-block";
    bordersSpecific.innerHTML = "No borders.";
  }
}

// ////////Adding dark mode functionality
const darkMode = document.querySelector(".right-section");
//
const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const asideEl = document.querySelector("aside");
darkMode.addEventListener("click", () => {
  headerEl.classList.toggle("header-dark");
  mainEl.classList.toggle("main-dark");
  asideEl.classList.toggle("aside-dark");
});
