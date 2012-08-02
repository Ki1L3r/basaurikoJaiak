App.Events = (function(lng, app, undefined) {

		var map;
		var initialize = function () {
	        var mapOptions = {
	          zoom: 6,
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	        map = new google.maps.Map(document.getElementById('map_canvas'),
	            mapOptions);

	        // Try HTML5 geolocation
	        if(navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position) {
	            var pos = new google.maps.LatLng(position.coords.latitude,
	                                             position.coords.longitude);

	            var infowindow = new google.maps.InfoWindow({
	              map: map,
	              position: pos,
	              content: 'Estas Aquí.'
	            });

	            map.setCenter(pos);
	          }, function() {
	            handleNoGeolocation(true);
	          });
	        } else {
	          // Browser doesn't support Geolocation
	          handleNoGeolocation(false);
	        }
	      };

	      var handleNoGeolocation = function (errorFlag) {
	      	if (errorFlag) {
	          var content = 'Error: El servicio de Geolocalizacion a fallado.';
	        } else {
	          var content = 'Error: Tu navegador no soporta Geolocalizacion.';
	        }

	        var options = {
	          map: map,
	          position: new google.maps.LatLng(43.235390, -2.891421),
	          content: content
	        };

	        var infowindow = new google.maps.InfoWindow(options);
	        map.setCenter(options.position);
	      };		

	lng.dom('#gps').tap(function(event) { alert("Pulsado"); });

	lng.dom('#gps').tap(function(event) { initialize(); });

    return {

    }

})(LUNGO, App);