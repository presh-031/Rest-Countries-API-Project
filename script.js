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
    // const gridItem = document.createElement("div");
    // const countryFlagContainer = document.createElement("div");
    // const countryInfoContainer = document.createElement("div");
    console.log(country.flags.png);
  });
}
