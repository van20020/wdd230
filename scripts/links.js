
const baseURL = "https://van20020.github.io/wdd230/";
const linksURL = "https://van20020.github.io/wdd230/data/links.json";
const container = document.querySelector('#allWeeks');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();


function displayLinks(weeks) {

  weeks.forEach(week => {
    const weekHeader = document.createElement('h2');
    weekHeader.textContent = week.week;
    container.appendChild(weekHeader);

    const ul = document.createElement('ul');

    week.links.forEach((link, index) => {
      const li = document.createElement('li');

      const a = document.createElement('a');
      a.href = `${baseURL}${link.url}`;
      a.textContent = link.title;
      li.appendChild(a);

      ul.appendChild(li);
    });

    container.appendChild(ul);
  });
}
