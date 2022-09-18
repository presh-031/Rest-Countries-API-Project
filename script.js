"use strict";

getAllCountriesOnLoad();
function getAllCountriesOnLoad() {
  // const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      // console.log(data);
      // console.log(data.length);
      updateDOMOnPageLoad(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function updateDOMOnPageLoad(data) {
  const gridContainer = document.querySelector(".countries-container");
  const countryInfo = document.querySelector(".country-info");
  // console.log(data);
  data.forEach((country) => {
    // create-elements
    const eachCountry = document.createElement("div");
    const flagContainer = document.createElement("div");
    const flagImage = document.createElement("img");
    const infoContainer = document.createElement("div");
    const countryName = document.createElement("h3");
    const countryPopulation = document.createElement("span");
    const countryRegion = document.createElement("span");
    const countryCapital = document.createElement("span");
    console.log(country.flags.png);

    // add classes
    gridContainer.classList.add("countries-container");
    eachCountry.classList.add("each-country");
    flagContainer.classList.add("flag-container");
    flagImage.classList.add("flag-image");
    infoContainer.classList.add("info-container");
    countryName.classList.add("country-name");
    countryInfo.classList.add("country-info");
    countryPopulation.classList.add("country-population");
    countryRegion.classList.add("country-region");
    countryCapital.classList.add("country-capital");

    // append appropriate child elements
    gridContainer.append(eachCountry);
    eachCountry.append(flagContainer);
    flagContainer.append(flagImage);
    eachCountry.append(infoContainer);
    infoContainer.append(countryName);
    infoContainer.append(countryInfo);
  });
}
