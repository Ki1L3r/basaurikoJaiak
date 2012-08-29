App.Events = (function(lng, app, undefined) {

		lng.ready(function()
		    {
		        if (document.body.clientWidth > 481) //Para el iPad
		            lng.View.Aside.show('#main', '#menu');
		    });
		
		var map;
		var initialize = function () {
			alert('mapa');
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

	var makeSearch = function(){
        app.Services.getSearch(app.Data.getSearchTerm());
    }

    // makePullDown method. Calculates distance to top and container to make the pulldown. 
    var makePullDown = function(){
        var pulldown_offset_top = (lng.dom("#pullDown").offset().top);
        var container_top = (lng.dom("#tweet_container").offset().top);
        if (pulldown_offset_top >= container_top && !pulldown_offset_top <  container_top){
            lng.dom("#pullDown").toggleClass('loading');
            $$('.pullDownLabel').html('Actualizando ...');
            // update the request
            App.Data.setSearchTerm("basaurikoJaiak");
            makeSearch();
           
        }

    };

    lng.dom('#twiits').tap(function(event) {
            App.Data.setSearchTerm("basaurikoJaiak");
            makeSearch();
    });

    lng.dom('#tweet_container').on('longTap', function(){
        makePullDown();       
    });

	lng.dom('#search_button').tap(function(event) { initialize(); });

	lng.dom('#asdddd').tap(function(event) {
            initialize();
    });

    return {
        makeSearch:makeSearch,
        makePullDown:makePullDown
    }		

	
})(LUNGO, App);