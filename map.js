function initialize() {
	var mapOptions = {
	  center: new google.maps.LatLng(45.8128488, 15.9753009,17),
	  zoom: 16
	};
	var map = new google.maps.Map(document.getElementById("map-canvas-holder"),
		mapOptions);
	//var pinIcon = new google.maps.MarkerImage(
	//	"images/custom-pin.png",
	//	 null,
	//	 null,
	//	 null,
	//	 new google.maps.Size(19, 30)
	//);
	var marker = new google.maps.Marker({
	  position: new google.maps.LatLng(45.8128488, 15.9753009,17),
	  map: map,
	  title: 'Fiziodent, Trg kralja Petra Krešimira IV br. 17, Zagreb',
	  //icon: pinIcon
	});
   
	var contentString = '<div id="infowindow"><table><tr><td></td><td><strong>Fiziodent</strong><br />Trg kralja Petra Krešimira IV br. 17,<br />10000 Zagreb, Hrvatska</td></tr></table></div>';

	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);