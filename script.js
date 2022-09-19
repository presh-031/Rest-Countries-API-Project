"use strict";

getPageLoadUrl();

function getPageLoadUrl() {
  // API docs
  const onPageLoadParam = "all";
  getAllCountries(onPageLoadParam);

  filter();
  search(onPageLoadParam);
}

// filter
function filter() {
  const items = document.querySelector("#filter");
  items.addEventListener("change", (e) => {
    const filterParam = e.target.value;
    console.log(filterParam);
    if (filterParam === "#") {
      // getAllCountries(onPageLoadParam);
      getPageLoadUrl();
    } else {
      getAllCountries(`region/${filterParam}`);
    }
  });
}

// Search
function search(onPageLoadParam) {
  const inputField = document.querySelector("#search");
  inputField.addEventListener("input", () => {
    const searchTerm = inputField.value.toLowerCase();
    // console.log(searchTerm);
    if (searchTerm) {
      getAllCountries(`name/${searchTerm}`);
    } else {
      getAllCountries(onPageLoadParam);
    }
  });
}

// Function to handle all the fetches for HomePage
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
      //
      //
      // Error handling.
    });
}

function updateDOMForHomePage(data) {
  const gridContainer = document.querySelector(".countries-container");
  gridContainer.innerHTML = "";
  // gridContainer.classList.add("active");
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
    // sometimes, country capital returns undefined.
    countryCapital.innerHTML = country.capital ? country.capital : "-";

    //

    eachCountry.addEventListener("click", (e) => {
      // console.log(e, data);
      handleCountryClick(e, data);
    });
  });
}

// ////////////click
function handleCountryClick(e, data) {
  const clickedItem = e.target;
  console.log(clickedItem);
  // if clickedItem is any of the elements within each country,
  // fetch based on the name
  // use data returned to update the new page
  // redirect to the new page
  // add back btn to redirect back to homepage.

  if (clickedItem.classList.contains("country-name")) {
    console.log(clickedItem.innerHTML.toLowerCase());
    getCountryData(clickedItem.innerHTML.toLowerCase());
  }
}

function getCountryData(name) {
  const url = `https://restcountries.com/v2/name/${name}`;

  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);
      // name
      // nativename
      // population
      // region
      // subregion
      // capital
      // topleveldomain
      // currencies
      // languages
      // bordercountries
      console.log(data[0].name);
      console.log(data[0].nativeName);
      console.log(data[0].population);
      console.log(data[0].region);
      console.log(data[0].subregion);
      console.log(data[0].capital);
      console.log(data[0].topLevelDomain);
      console.log(data[0].currencies); //array
      console.log(data[0].languages); //array
      console.log(data[0].borders); //sometimes undefined, sometimes anarray
    })
    .catch((err) => {
      console.log(`error ${err}`);
      //
      //
      // Error handling.
    });
}
function updateDOMForInfoPage() {}
