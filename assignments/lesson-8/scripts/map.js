// Map for preston
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(42.0963,-111.8766),
    zoom:10,
  };
  var map = new google.maps.Map(document.getElementById("googlemap"),mapProp);
}