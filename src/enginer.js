const udur = document.querySelector('.date');
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const now = new Date();
const date = monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
udur.textContent = date;
const api={
    apiKey: "ab78e8a71989db5a748fbf7ad09b956c",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
}

let autocomplete;
function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['geocode'],
            fields: ['name']
        }
    );
    autocomplete.addListener('place_changed', onPlaceChanged)
}
function onPlaceChanged(){
    var place = autocomplete.getPlace();
    if(!place.geometry){
        document.getElementById('autocomplete').placeholder = "Not you";
    }else{
        document.getElementById('autocomplete').innerHTML = place.name;
    }
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
    const cityName = document.querySelector('.city');
    const temperature = document.querySelector('.temp');
    const status = document.querySelector('.status');
    status.textContent = weatherData.weather[0].main;
    cityName.textContent = weatherData.name + ", " + weatherData.sys.country;
    temperature.textContent = Math.floor(weatherData.main.temp - 273) + "°";
    // switch(weatherData.weather[0].main){
    //     case "Rain":
    
    // }
}