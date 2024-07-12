const currentTemp = document.querySelector('#currentTemp');
const forecastContainer = document.querySelector('#forecastTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=36.73&lon=-119.78&appid=82759ac2b782fcdfcf1df037e53b17d1&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.73&lon=-119.78&appid=82759ac2b782fcdfcf1df037e53b17d1&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
  
  try {
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const data = await forecastResponse.json();
      displayForecast(data);
    } else {
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `Current Temperature: ${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';
    
    let daysDisplayed = 0;
    
    for (let i = 1; i < data.list.length; i++) {
        const forecast = data.list[i];
        const forecastTime = new Date(forecast.dt * 1000);
        const dayName = forecastTime.toLocaleDateString('en-US', { weekday: 'short' });
        
        if (i === 0 || forecastTime.getDate() !== new Date(data.list[i - 1].dt * 1000).getDate()) {
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            
            const forecastTemp = document.createElement('span');
            forecastTemp.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;
            
            const forecastDesc = document.createElement('span');
            forecastDesc.textContent = forecast.weather[0].description;
            
            const forecastIcon = document.createElement('img');
            forecastIcon.setAttribute('src', `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`);
            forecastIcon.setAttribute('alt', forecast.weather[0].description);
            
            const forecastDay = document.createElement('span');
            forecastDay.textContent = dayName;
            
            forecastItem.appendChild(forecastDay);
            forecastItem.appendChild(forecastTemp);
            forecastItem.appendChild(forecastDesc);
            forecastItem.appendChild(forecastIcon);
            
            forecastContainer.appendChild(forecastItem);
            
            daysDisplayed++;
            
            if (daysDisplayed === 3) {
                break;
            }
        }
    }
}

  