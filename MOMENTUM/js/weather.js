const API_KEY = "173d58b0e00d71399a00a4f02f7a382e"

function onGeoGood(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp} ℃ `
    });
}
function onGeoError(){
    alert("can't find you")
}
navigator.geolocation.getCurrentPosition(onGeoGood,onGeoError)