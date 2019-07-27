// date //
var d = new Date();
//document.getElementById("dt").innerHTML = d.toDateString();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "Saptember", "October", "November", "December"];
document.getElementById("dt").innerHTML = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();