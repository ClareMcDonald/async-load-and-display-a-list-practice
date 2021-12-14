export function renderCars(car) {
    const carEl = document.createElement('div');
    const modelEl = document.createElement('p');
    const makeEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const colorEl = document.createElement('p');

    carEl.classList.add('car-item');

    modelEl.textContent = car.model;
    makeEl.textContent = car.make;
    yearEl.textContent = car.year;
    colorEl.textContent = car.color;

    carEl.append(modelEl, makeEl, yearEl, colorEl);

    return carEl;
}