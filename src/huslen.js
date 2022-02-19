function lol(){
    const udur=document.querySelector('.date')
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
    ];
    const now = new Date();
    const date=monthNames[now.getMonth()]+" "+ now.getDate()+", "+now.getFullYear();
    udur.textContent=date;
}
lol();
const api={
    apikey:"8870ceb7efb1ef7975027ee2cb9d6e9c",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
}
const input =document.querySelector('.searchbar')
input.addEventListener('keypress',listener)
function listener(event){
if(event.keyCode == 13){
   sendRequest(input.value);
  }
}
function sendRequest(cityName){
    fetch(`${api.baseUrl}${cityName}&appid=${api.apikey}`).then(weather =>{
       return weather.json();
    }).then(displayData)
}
function displayData(weatherData){
    console.log(weatherData)
}
