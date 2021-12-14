export function renderCandies(candy) {
    const candyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const makerEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const deliciousEl = document.createElement('p');

    candyEl.classList.add('candy-item');

    nameEl.textContent = candy.name;
    makerEl.textContent = candy.maker;
    yearEl.textContent = candy.yearPopularized;
    deliciousEl.textContent = candy.deliciousRanking;

    candyEl.append(nameEl, makerEl, yearEl, deliciousEl);

    return candyEl;
}