$(function() {
  initializeMap();

  // Smooth Scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Talks Modal
  $('.schedule-talk:not(".no-modal")').on("click", function() {
    $talk = $(this).clone();
    $("#modal-talks").modal();
    $("#modal-talks .modal-body").html($talk);
  });

});

// Map
function initializeMap() {
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