var temp = 80 //parseInt(document.getElementById('cTemp').innerHTML);
var speed = 25//parseInt(document.getElementById('wSpeed').innerHTML);
var wChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
wChill = Math.round(wChill);
document.getElementById("wChill").innerHTML = wChill