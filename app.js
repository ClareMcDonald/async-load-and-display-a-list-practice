// import functions and grab DOM elements
import { renderCandies } from './render-candies.js';
import { renderCats } from './render-cats.js';
import { renderDogs } from './render-dogs.js';
import { renderCars } from './render-cars.js';
import { getCandies, getCats, getDogs, getCars } from './fetch-utils.js';

const candyContainer = document.getElementById('candy-container');
const catContainer = document.getElementById('cat-container');
const dogContainer = document.getElementById('dog-container');
const carContainer = document.getElementById('car-container');

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

window.addEventListener('load', async() => {
    const cats = await getCats();

    for (let cat of cats) {
        const catEl = renderCats(cat);

        catContainer.append(catEl);
    }
});

window.addEventListener('load', async() => {
    const dogs = await getDogs();
  
    for (let dog of dogs) {
        const dogEl = renderDogs(dog);

        dogContainer.append(dogEl);
    }
});

window.addEventListener('load', async() => {
    const cars = await getCars();

    for (let car of cars) {
        const carEl = renderCars(car);

        carContainer.append(carEl);
    }
});