"use strict";

getAllCountriesOnLoad();
function getAllCountriesOnLoad() {
  const url = "https://restcountries.com/v3.1/all";
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
  console.log(data);
  data.forEach((country) => {
    // create-elements
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
    // console.log(country.flags.png);
    console.log(eachCountry);
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

    console.log(country.name.common);
    console.log(country.population);
    console.log(country.capital[0]);
    console.log(country.region);

    flagImage.src = country.flags.svg;
    boldPop.innerHTML = "Population: ";
    boldReg.innerHTML = "Region: ";
    boldCap.innerHTML = "Capital: ";
    countryName.innerHTML = country.name.common;
    countryPopulation.innerHTML = country.population;
    countryRegion.innerHTML = country.region;
    countryCapital.innerHTML = country.capital[0];
  });
}
