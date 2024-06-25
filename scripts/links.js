const baseURL = "https://van20020.github.io/wdd230/";
const linksURL = "https://van20020.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

  