function initialize() {
  var mapOptions = {
    // Zoom of map on start
    zoom: 10,
    // Initial center cordinates on start (India)
    center: new google.maps.LatLng(20.5937, 78.9629),
    // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // Minimum zoom of map
    minZoom: 2,
  };

  // Create a new map instance using provided options
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Create an info window to display location info
  var infoWindow = new google.maps.InfoWindow();

  // Create a marker for example : Indore, Madhya Pradesh
  var marker = new google.maps.Marker({
    // Cordinates for Indore, Madhya Pradesh
    position: new google.maps.LatLng(22.7196, 75.8577),
    // Attach the marker
    map: map,
    // Tooltip on hover
    title: "Indore, M.P",
  });

  // Add click event listener for marker
  marker.addListener("click", function () {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  });

  // Adjust map center when the window is resized
  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(mapOptions.center);
  });
}

// Initialize the map when window loading finished
google.maps.event.addDomListener(window, "load", initialize);
