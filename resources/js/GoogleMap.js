
var map;
function initMap() {
      var mapOptions = {
        center: {lat: 13.847860, lng: 100.604274},
        zoom: 18,
      }
          
      var maps = new google.maps.Map(document.getElementById("map"),mapOptions);
      
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.open(maps);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
      
  }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRNrYYHRddNMWLvuGSkrMpTeRWnw7gVT0&callback=initMap"
async defer></script>