export function renderCats(cat) {
    const catEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');

    catEl.classList.add('cat-item');

    nameEl.textContent = cat.name;
    colorEl.textContent = cat.color;
    ageEl.textContent = cat.age;
    breedEl.textContent = cat.breed;
    
    catEl.append(nameEl, colorEl, ageEl, breedEl);

    return catEl;
}