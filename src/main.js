const api = {
    apiKey:"375b3a685e5d0a1ac3ea7363f8f7039b",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?q=",
}
const input = document.querySelector("#input")
input.addEventListener("keypress", listener );

function listener(event) {
    if(event.keyCode == 13){
        sendRequest(input.value)
    }
}
    
function sendRequest(cityName){
       fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`).then(response => response.json())
       .then(data => redirectData(data));
}

function redirectData(data) {
    console.log(data.main.temp);

}