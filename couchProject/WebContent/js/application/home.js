/**
 * Functions specific to homePage.html.
 */

//    localStorage - stores data with no expiration date
//    sessionStorage - stores data for one session

$( document ).delegate("#homePage", "pageinit", function() {		
		
	setOnlineStatus();	
	  		
});	

/**
 * Create an new event and move to the event
 * page.
 */
function createNewEvent() {
	
	var incident = new Incident();
			
	setCurrentIncident(incident);
	$.mobile.changePage( "incidentForm.html");
	
}

/**
 * Constructor for a new Incident object.
 * @returns {Incident}
 */
function Incident() {
	this.type = "incident";
	this.incId = uniqid();
	this.eventNumber = "NEW_INC_1234";
	this.title = "";
}

/**
 * Generate a practically unique identifier.
 * @returns {String}
 */
function uniqid() {
	var newDate = new Date;
	var partOne = newDate.getTime();
	var partTwo = 1 + Math.floor((Math.random()*32767));
	var partThree = 1 + Math.floor((Math.random()*32767));
	var id = partOne + '-' + partTwo + '-' + partThree;
	return id;
}

/**
 * Load dummy data into storage for testing
 * or debugging.
 */
function loadTestData() {	
		
	/**
	 * Array of all incidents.
	 */
	var incidents = new Array();
	
	var incident = new Object();	
	incident.type = "incident";
	incident.incId = "1";
	incident.eventNumber = "Testing1234";
	incident.title = "Testing title";
	
	incidents.push(incident);
	
	var incident1 = new Object();
	incident1.type = "incident";
	incident1.incId = "2";
	incident1.eventNumber = "Testing5678";
	incident1.title = "Testing title again";
	
	incidents.push(incident1);
		
	$.jStorage.set(INCIDENTS_LIST_KEY, incidents);
		
}