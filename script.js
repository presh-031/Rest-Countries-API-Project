"use strict";

getAllCountriesOnLoad();
function getAllCountriesOnLoad() {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      // console.log(data);
      console.log(data.length);
      console.log(data.forEach(country => {});
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
