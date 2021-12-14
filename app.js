// import functions and grab DOM elements
import { renderCandies } from './render-candies.js';
import { getCandies } from './fetch-utils.js';

const candyContainer = document.getElementById('candy-container');

// let state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state

window.addEventListener('load', async() => {
    const candies = await getCandies();

    for (let candy of candies) {
        const candyEl = renderCandies(candy);
        candyContainer.append(candyEl);
    }

});