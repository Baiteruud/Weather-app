const input = document.querySelector('.searchBar')
const dateText = document.querySelector('.date')
const locationName = document.querySelector('.city')
const temperature = document.querySelector(".temp")
const weatherStatus = document.querySelector(".weatherInfo")
const monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
let respond = {}

input:addEventListener('keypress', eventListener);
const getDate = (date) => monthNames[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()
const formatTemperature = (temp) => Math.round((temp - 273.15))
dateText.textContent = getDate(new Date)

let autocomplete

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
    input, 
    {
    types : ["(cities)"],
    // componentRestrictions: {},
    fields: ['place_id', 'geometry', 'name']});

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
        input.placeholder = "Enter a place";
    } else {
        sendRequest(place.name)
    }
}

const api = {
    apiKey : "aca70e6e79d9fee2253ce3b91631ee48",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather?q=",
}

function displayInfo(info){
    if (info) {
        locationName.textContent = info.name+", "+info.sys.country
        dateText.textContent = getDate(new Date)
        temperature.textContent = formatTemperature(info.main.temp)
        weatherStatus.textContent = info.weather[0].main
    }
}

function sendRequest(cityName){
    fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`).then(weather=> {
        return weather.json()
    }).then(displayInfo)
}

function eventListener(event){
    if(event.key == "Enter"){
        sendRequest(input.value)
    }
}