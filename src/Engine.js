function getDate() {
const udue = document.querySelector('.date')
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]; 
    const now = new Date();
    const  date= monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
    console.log(date)
}

const api = {
    apiKey: "c8ecfafd2040250f97e9c3c4b1e34fc3",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
}

const input = document.querySelector('.searchBar')
input.addEventListener('keypress', listener);

function listener(event) {
    if(event.keyCode == 13){
        sendRequest(input.value);
    }
}

function sendRequest(cityName){
    fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`).then(weather => {
        return weather.json();
    })
    .then(displayData);
}
function displayData(weatherData){
    console.log(weatherData)
    const cityName = document.querySelector('.city');
    const temperature = document.querySelector('.temp')
    cityName.textContent = weatherData.name + " " + weatherData.sys.country;
    temperature.textContent = Math.floor(weatherData.main.temp - 273)+ "°";
}