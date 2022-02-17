const input = document.querySelector('.searchBar')
const date = document.querySelector('date')
const locationName = document.querySelector('city')
const temperature = document.querySelector("temp")
const weatherStatus = document.querySelector("weatherInfo")
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let respond = {}

input:addEventListener('keypress', eventListener);

const api = {
    apiKey : "aca70e6e79d9fee2253ce3b91631ee48",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather?q=",
}

function displayInfo(info){
    console.log(info)
    locationName.value = info.name
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

