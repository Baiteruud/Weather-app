const udue = document.querySelector('.date');
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
const date = monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
udue.textContent = date;


const api = {
  apiKey: "7e3cbf881415c036a41c7387f0191219",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
};

let  autocomplete;
const input = document.querySelector(".searchBar");

function initAutocomplete() {
 autocomplete = new google.maps.places.Autocomplete(
  document.getElementById('autocomplete'),
   {
     types:['geocode'],
     fields:['name']
    }  
  );
  console.log(autocomplete)
 autocomplete.addListener('place_changed', onPlaceChanged)
}

function onPlaceChanged(){
  var place = autocomplete.getPlace();
  if(!place.geometry){
    document.getElementById('autocomplete').innerHTML = place.name;
  }else{
    document.getElementById('autocomplete').innerHTML = place.name;
  }
}
/* 
const input = document.querySelector(".searchBar"); */
input.addEventListener("keypress", listener);

function listener(event) {
  if (event.keyCode == 13) {
    sendRequest(input.value);
  }
}

function sendRequest(cityName) {
  fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayData);
}

function displayData(tsagUur) {
  console.log(tsagUur);
  const cityName = document.querySelector('.city');
  const temperature = document.querySelector('.temp');
  const status = document.querySelector('.status');
//   displaying cityName
  cityName.textContent = tsagUur.name + ", " + tsagUur.sys.country;
//   displaying converted temperature
  temperature.textContent = Math.floor(tsagUur.main.temp - 273)+ "°";
// displaying status
  status.textContent = tsagUur.weather[0].main;
}