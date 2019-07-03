//Soda Springs 5607916  (Jason File says 5678757 used one provided by course)

//weather summery
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'HTTPS://api.openweathermap.org/data/2.5/weather?id=5607916&appid=9a639e9b88f8f96c233986dc5ceb5877&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('cTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('wSpeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('wDir').innerHTML = Math.round (weatherInfo.wind.deg);


    var wChill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);
    wChill = Math.round(wChill);
    document.getElementById('wChill').innerHTML = wChill;
}

//forcast
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', 'HTTPS://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=9a639e9b88f8f96c233986dc5ceb5877&units=imperial', true);
weatherForecast.send();
weatherForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);
    var listDate = [];
    var listIconCode = [];
    var listTemp = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {


            var date = new Date(weatherInfo.list[i].dt * 1000);
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "Saptember", "October", "November", "December"];
            var findDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + " " + date.getDate();
            listDate.push(findDate);

            var temp = weatherInfo.list[i].main.temp;
            temp = Math.round(temp);
            listTemp.push(temp);

            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }

    //forcast date
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    //Icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    //Temp
    document.getElementById('highTemp1').innerHTML = listTemp[0];
    document.getElementById('highTemp2').innerHTML = listTemp[1];
    document.getElementById('highTemp3').innerHTML = listTemp[2];
    document.getElementById('highTemp4').innerHTML = listTemp[3];
    document.getElementById('highTemp5').innerHTML = listTemp[4];

}
//Event
var aside = document.querySelector('aside');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];


    for (var i = 0; i < data.length; i++) {
        if ((data[i].name == "Soda Springs") == false) {
            continue;
        }
        var myAside = document.createElement('aside');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('ul');
        var myPhoto = document.createElement('img');

        myH2.textContent = "Upcoming events in Soda Springs:";
        var allevents = data[i].events;
        for (var j = 0; j < allevents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = allevents[j];
            mylist.appendChild(listItem);
        }
        
        myAside.appendChild(myH2);
        myAside.appendChild(mylist);
        myAside.appendChild(myPhoto);

        myPhoto.src = "images/oktoberFestSodaSprings.jpg"
        myPhoto.setAttribute('class', 'eventPhoto');
        myPhoto.setAttribute('alt', 'Oktober Fest Logo');
        aside.appendChild(myAside);
    }
}
// Map for Spda Springs
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(42.6544,-111.6047),
      zoom:12,
    };
    var map = new google.maps.Map(document.getElementById("googlemap"),mapProp);
}