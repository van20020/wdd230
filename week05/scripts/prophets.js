const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
    //Temp
    // console.table(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const birth = document.createElement('p');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birth.textContent = `${prophet.birthdate} ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};
//Same as ^^^^
// function displayProphets(prophets) {

// }

getProphetData();