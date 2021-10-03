let data = require('../info.json');
const APIkey = '4245a9a04e1d8e2891aada0d741989aa';

function getCities() {
    const weatherContainer = document.getElementById("weather__container");
    const cities = data.cities;

    for (let city of cities) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.title}&units=metric&lang=ua&appid=${APIkey}`)
    .then(response => response.json())
    .then(data => {
        const imgURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let list = `<div class="weather__item">
        <div class="weather__item__header">
            <h3 class="weather__item__header__city">
                ${data.name}
            </h3>
            <div class="weather__item__header__coords">
                <p class="weather__item__header__coord">
                    Lon: ${data.coord.lon}
                </p>
                <p class="weather__item__header__coord">
                    Lat: ${data.coord.lat}
                </p>
            </div>
        </div>
        <div class="weather__item__desc">
            <div class="weather__item__desc__title">
                ${data.weather[0].main}
            </div>
            <img src="${imgURL}" alt="" class="weather__item__desc__img">
            <div class="weather__item__desc__text">
                ${data.weather[0].description}
            </div>
        </div>
        <div class="weather__item__summary">
            <div class="weather__item__summary__item">
                <p class="weather__item__summary__text">
                    Середня темп.: ${data.main.temp}&#8451;
                </p>
                <p class="weather__item__summary__text">
                    Відчувається: ${data.main.feels_like}&#8451;
                </p>
            </div>
            <div class="weather__item__summary__item">
                <p class="weather__item__summary__text">
                    Мінімальна темп.: ${data.main.temp_min}&#8451;
                </p>
                <p class="weather__item__summary__text">
                    Максимальна темп.: ${data.main.temp_max}&#8451;
                </p>
            </div>
            <div class="weather__item__summary__item">
                <p class="weather__item__summary__text">
                    Тиск: ${data.main.pressure} hPa
                </p>
                <p class="weather__item__summary__text">
                    Вологість: ${data.main.humidity}%
                </p>
            </div>
        </div>
        <div class="weather__item__about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vulputate ipsum ut libero lobortis, vel tincidunt orci sollicitudin.
            Fusce euismod nibh sagittis eros fringilla.
        </div>
        </div>`;
        weatherContainer.innerHTML = list + weatherContainer.innerHTML;
    });
    }
}

getCities();
