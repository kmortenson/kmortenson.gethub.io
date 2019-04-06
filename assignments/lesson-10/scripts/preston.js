//Preston 5604473

//weather summery
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'HTTPS://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9a639e9b88f8f96c233986dc5ceb5877&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('cTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('wSpeed').innerHTML = weatherInfo.wind.speed;

   
    var wChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16)
        + 0.4275 * weatherInfo.main.temp * Math.pow (weatherInfo.wind.speed, 0.16);
wChill = Math.round(wChill);
document.getElementById('wChill').innerHTML = wChill
}

//forcast
//var weatherForcast = new XMLHttpRequest();