const api = {
    apiKey:"375b3a685e5d0a1ac3ea7363f8f7039b",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?q=",
}

const input = document.querySelector('.searchBar')
input.addEventListener('keypress', listener);

function listener(event) {
    if(event.keyCode == 13){
        sendRequest(input.value);
    }
}

function sendRequest(cityName) {
    fetch(`${api.baseUrl}${cityName}$appid=${api.apiKey}`).then(weather => {
        return weather.json()
        //here 
    }).then(displayData);
}
function displayData(weatherData) {
    console.log(weatherData)
}