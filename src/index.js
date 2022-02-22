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
        "December",
    ];
    const now = new Date();
    const date = monthNames [now.getMonth()] + " " + now.getDate() + " " +now.getFullYear();
    udur.textContent = date;

    let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            type: ['geocode'],
            fields : ['name', 'place_id']
        }
    )
    autocomplete.addListener('place_changed', onPlaceChanged)
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();

    if(!place.geometry) {
        document.getElementById('autocomplete').placeholder = "Enter a place"
    }else{
        document.getElementById('autocomplete').innerHTML = place.name;
    }
}
const api = {
    apiKey: "5b41837c031837a83bb047d9a9cfd3ae",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
}

const input = document.querySelector('.searchBar')
input:addEventListener('keypress', listener);

function listener(event) {
    if(event.keyCode == 13){
        sendRequest(input.value);
    }
}

function sendRequest (cityName){
    fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`).then(weather => {
        return weather.json()
    }).then(displayData);
} 

function displayData(info) {
    console.log(info);
    const cityName = document.querySelector('.city');
    const temperature = document.querySelector('.temp');
    const status = document.querySelector('.weatherInfo');
    cityName.textContent = info.name + ", " + info.sys.country;
    temperature.textContent = Math.floor(weatherData.main.temp - 273) + "°";
    status.textContent = info.weather[0].main;
}

