/**
 * Functions specific to homePage.html.
 */

//    localStorage - stores data with no expiration date
//    sessionStorage - stores data for one session

$( document ).delegate("#homePage", "pageinit", function() {		
		
	/* Native localStorage support.
	localStorage.setItem("bar", "foo");	
	var foo = localStorage.getItem("bar");	
	alert(foo);*/
	
	/* jstorage library support
	var key = "key";
	$.jStorage.set(key, "Testing");
	var value = $.jStorage.get(key);
	alert(value);
	*/

	
	/*$.getJSON('../jsp/test.jsp', function(data) {				
		$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
		$.each(data.rows, function(key, val) {
			$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val.key + '</a></li>');		
		});		
		$("#incidentListDiv").trigger('create');
	});			*/	  		
	  		
});	

function loadTestData() {
	
	/**
	 * Array of all incidents.
	 */
	var incidents = new Array();
	
	var incident = new Object();
	incident.type = "incident";
	incident.eventNumber = "Testing1234";
	incident.title = "Testing title";
	
	incidents.push(incident);
	
	var incident1 = new Object();
	incident1.type = "incident";
	incident1.eventNumber = "Testing5678";
	incident1.title = "Testing title again";
	
	incidents.push(incident1);
	
	$.jStorage.set(INCIDENTS_LIST_KEY, incidents);
	
	alert($.jStorage.get(INCIDENTS_LIST_KEY));
	
}