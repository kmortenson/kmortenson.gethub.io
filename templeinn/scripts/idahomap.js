// Map for Idaho
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(44.714389, -114.699917),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googlemap"), mapProp);
}