$(function() {

});

// Map
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(35.467, -97.514),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //Markers
  var markerPoints = [
    ['Thunder Plains', 'thunderplains', 35.464613, -97.514815, 1],
    ['Sheraton', 'hotel', 35.46665, -97.5152], 1,
    ['Renaissance', 'hotel', 35.466715, -97.514096, 2],
    ['The Skirvin', 'hotel', 35.46875, -97.514160, 1],
    ['Hampton Inn and Suites', 'hotel', 35.4662, -97.50755, 1],
    ['Colcord', 'hotel', 35.466723, -97.516944, 1],
    ['Chelinos Mexican Restaurant', 'food', 35.465511, -97.510845, 1],
    ['Bricktown Brewery', 'food', 35.466603, -97.510877, 1],
    ['Vast', 'food', 35.466517, -97.517615, 1],
    ['Park Avenue Grill', 'food', 35.4678, -97.514171, 1],
  ];
  function setMarkers(map, locations) {
    for (var i = 0; i < locations.length; i++) {
      var point = locations[i];
      var icon = 'images/marker-' + point[1] + '.png'
      var pointLatLong = new google.maps.LatLng(point[2], point[3]);
      var marker = new google.maps.Marker({
          position: pointLatLong,
          map: map,
          icon: icon,
          title: point[0],
          zIndex: point[4]
      });
    }
  }
  setMarkers(map, markerPoints);
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAeONbUQ6kLGhACwnwjFg_n9CtvrAB5Hn0&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;