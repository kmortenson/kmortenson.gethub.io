//Preston 5604473

//weather summery
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'HTTPS://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9a639e9b88f8f96c233986dc5ceb5877&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('cTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('wSpeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('wDir').innerHTML = Math.round(weatherInfo.wind.deg);



    var wChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);
    wChill = Math.round(wChill);
    document.getElementById('wChill').innerHTML = wChill;
}



//Event
var aside = document.querySelector('aside');
var requestURL = "https://github.com/kmortenson/kmortenson.github.io/blob/master/templeinn/json/temple.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeData = request.response;
    showData(templeData);
}

function showData(jsonObj) {
    var data = jsonObj['temple'];


    for (var i = 0; i < data.length; i++) {
        if ((data[i].name == "Washington D.C.") == false) {
            continue;
        }
        var myAside = document.createElement('aside');
        var myH3 = document.createElement('h3');
        var mylist = document.createElement('ul');
       

        myH3.textContent = "Temple Closure Scheduale:";


        var allevents = data[i].events;
        for (var j = 0; j < allevents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = allevents[j];
            mylist.appendChild(listItem);
        }

        myAside.appendChild(myH3);
        myAside.appendChild(mylist);
        aside.appendChild(myAside);
    }
}
// Map for DC
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(39.0140934,-77.0677707),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googlemap"), mapProp);
}