const api={
    apiKey: "ab78e8a71989db5a748fbf7ad09b956c",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
}

const input = document.querySelector('.searchbar')
input.addEventListener('keypress', listener);

function listener(event){
    if(event.keyCode == 13){
        sendRequest(input.value);
    }
}

function sendRequest(cityName){
    fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`).then(weather => {
        return weather.json()
    }).then(data => displayData(data));
}

function displayData(weatherData){
    console.log(weatherData)
}