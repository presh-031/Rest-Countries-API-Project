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
  // console.log(data);
  data.forEach((country) => {
    const eachCountry = document.createElement("div");
    const flagContainer = document.createElement("div");
    const flagImage = document.createElement("img");
    const infoContainer = document.createElement("div");
    const countryName = document.createElement("h3");
    const countryName = document.createElement("h3");
    const countryName = document.createElement("h3");
    console.log(country.flags.png);
  });
}
