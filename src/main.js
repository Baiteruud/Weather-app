const udur = document.querySelector("#date");
const monthNames=[
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
    

]
const now = new Date();
const month = monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear(); 
udur.textContent = month;

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
    console.log(data.main);
}

    
    
