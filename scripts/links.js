const baseURL = "https://van20020.github.io/wdd230/";
const linksURL = "https://van20020.github.io/wdd230/data/links.json";
const allWeeks = document.querySelector("#allWeeks");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.Weeks);
}

const displayLinks = (Weeks) => {
  Weeks.forEach((week) => {
    let card = document.createElement("section");
    let weeks = document.createElement("p");
    let links = document.createElement("p");

    weeks.textContent = `${week.week}`;
    links.textContent = `${week.links}`;

    card.appendChild(weeks);
    card.appendChild(links);

    allWeeks.appendChild(card);
  });
};

getLinks();
