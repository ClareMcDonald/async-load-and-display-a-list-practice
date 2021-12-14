export function renderDogs(dog) {
    const dogEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const colorEl = document.createElement('p');

    dogEl.classList.add('dog-item');

    nameEl.textContent = dog.name;
    breedEl.textContent = dog.breed;
    ageEl.textContent = dog.age;
    colorEl.textContent = dog.color;

    dogEl.append(nameEl, breedEl, ageEl, colorEl);

    return dogEl;
}