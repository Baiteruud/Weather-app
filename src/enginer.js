 const api ={
 apiKey: "7e3cbf881415c036a41c7387f0191219",
 baseuUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
}
const input = document.querySelector('.searchBar')
input.addEventListener('keypress', listener);

function listener(event) {
 if(event.keyCode == 13){
   sendRequest(input.value);
 } 
}

function sendRequest(cityName) {
 fetch(`${api.baseuUrl}${cityName}&appid=${api.apiKey}`).then(weather =>{
  return weather.json()
 }).then(diplayData);
}

function diplayData(weatherData){
  console.log(weatherData)
}