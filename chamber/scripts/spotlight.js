async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

async function getSpotlightMembers() {
    const members = await fetchMemberData();
    return members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function displaySpotlights() {
    const spotlightsContainer = document.querySelector('.card-2');
    const spotlightMembers = await getSpotlightMembers();
    const shuffledSpotlightMembers = shuffleArray(spotlightMembers);

    shuffledSpotlightMembers.slice(0, 3).forEach(member => {
        const spotlightDiv = document.createElement('div');
        spotlightDiv.className = 'spotlight';

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = `${member.name} Image`;
        img.className = 'spotlight-image';

        const name = document.createElement('h3');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = 'Visit Website';
        website.target = '_blank';

        spotlightDiv.appendChild(img);
        spotlightDiv.appendChild(name);
        spotlightDiv.appendChild(address);
        spotlightDiv.appendChild(phone);
        spotlightDiv.appendChild(website);

        spotlightsContainer.appendChild(spotlightDiv);
    });
}

window.onload = displaySpotlights;