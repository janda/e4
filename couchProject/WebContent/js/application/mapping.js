
/**
 * Set the current latitude and longitude.
 */
function setCurrentPos() {

	if (navigator.geolocation) {
		console.log("Checking for geolocation.");
		navigator.geolocation.getCurrentPosition(getPosition, logError);
	} else {
		console.log("Geolocation is not supported.");
	}

}

/**
 * Obtain the lat/lon from geolocation API and store
 * in global variables.
 * @param position
 */
function getPosition(position) {

	g_current_lat = position.coords.latitude;
	console.log("Lat = " + g_current_lat);
	 
	g_current_lon = position.coords.longitude;
	console.log("Lon = " + g_current_lon);	
	
}

function logError(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		console.log("User denied the request for Geolocation.");
		break;
	case error.POSITION_UNAVAILABLE:
		console.log("Location information is unavailable.");
		break;
	case error.TIMEOUT:
		console.log("The request to get user location timed out.");
		break;
	case error.UNKNOWN_ERROR:
		console.log("An unknown error occurred.");
		break;
	}
}