/** @format */

const API_KEY = 'ac0b285a53cfadca75466e6d236b5902';

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
// navigator.geolocation.getCurrentPosition(success, error);

function onGeoSuccess(location) {
  console.log(location);
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const $weather = document.querySelector('#weather span:last-child');
      const $city = document.querySelector('#weather span:first-child');
      $weather.innerText = `${data.weather[0].main}, Temperature : ${data.main.temp}°C`;
      $city.innerText = data.name;
    });
}

function onGeoFail() {
  alert('Error 404');
}
