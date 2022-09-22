# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Your challenge is integrating with the REST Countries API to pull country data and display it like in the designs.

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

- Light mode
  ![](./Screen%20Shot%202022-09-22%20at%2000.17.58.png)
  ![](./Screen%20Shot%202022-09-22%20at%2000.17.52.png)
- Dark mode
  ![](./Screen%20Shot%202022-09-22%20at%2000.18.24.png)
  ![](./Screen%20Shot%202022-09-22%20at%2000.18.28.png)

## My process

### Features

- See all countries from the API on page load.
- Search for a country using the`input` field
- Filter countries by region using the dropdown.
- Click on a country's name to see more detailed information on a separate page.
- Click through to the border countries on the detail page.
- Toggle the color scheme between light and dark mode. The color mode respects your system preferences, and then stores whichever you choose in localstorage so it 'remembers' when user comes back to the app.

### Built with

- Semantic HTML5 markup
- CSS custom properties (for color mode toggle)
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- Fetch and DOM APIs
- Localstorage

### What I learned

- This was the first time i'll have to implement a color mode toggle, so I learnt the general idea behind that.

- Practiced creating a loading spinner. I could've implemented it in more sections of the project, but I intend to come back to work more on this project to add functionalities.

### Continued development

- With this fairly large project out of the way, i'll move on to working more with javascript libraries like react.js and its ecosystem.

### Useful resources

- [CSS Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class) - This helped me to understand the various ways of implementing color modes, and the idea I used in this project was from this article.

## Author

- GitHub - [presh-031](https://github.com/presh-031)
- Frontend Mentor - [@presh-031](https://www.frontendmentor.io/profile/presh-031)
- Twitter - [@presh-031](https://twitter.com/Presh_031)
