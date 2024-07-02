const membersUrl =
  "https://van20020.github.io/wdd230/chamber/data/members.json";
const membersCards = document.querySelector("#memberCards");

async function getMemberData() {
  const response = await fetch(membersUrl);
  const data = await response.json();
  // console.table(data.members)
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let number = document.createElement("p");
    let link = document.createElement("p");

    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    number.textContent = `${member.phone}`;
    link.textContent = `${member.website}`;

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(link);

    membersCards.appendChild(card);
  });
};

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

