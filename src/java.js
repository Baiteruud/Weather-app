
const udur = document.querySelector('#date');
const monthNames = [
    "January" ,
    "February" ,
    "March" ,
    "April" ,
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
udur.textContent = date;

const api = {
    apiKey: "d20ecf927f11571e877e6c6227621742",
    baseUrl :'https://api.openweathermap.org/data/2.5/weather?q=',
}

const input = document.querySelector('#search')
input.addEventListener('keypress' , listener);

function listener(event){
    if(event.keyCode == 13){
        sendRequest(input.value);
    }
}

function sendRequest(cityName){
    fetch(`${api.baseUrl}${cityName}&appid=${api.apiKey}`).then(weather => {
        return weather.json();
    }).then(displayData);
}

function displayData(tsagagaar){
    console.log(tsagagaar);
    const cityName = document.querySelector('#city');
    cityName.textContent = tsagagaar.name + " " + tsagagaar.sys.country;
}
function displayData(te){
    const temp = document.querySelector('#temp');
    const temperature = te.main.temp-272.15
    temp.textContent = temperature + "˚";
}
