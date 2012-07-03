/**
 * Functions specific to incidents.html.
 */
$("#incidentListPage").live("pageinit", function() {
	
	g_incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	
	
	/*var Incident = function(incId, eventNumber) {
		this.incId = incId;
		this.eventNumber = ko.observable(eventNumber);
	};*/

	var IncidentsViewModel = function(incidents) {
	   var self = this;
	   this.incidents = ko.observableArray(g_incidents);
//	   this.addPerson = function() {
//	       self.people.push(new Person(0, "new"));
//	   };                        
	};

	ko.applyBindings(new IncidentsViewModel(g_incidents));

	/*var incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	
	var len=0;
	if(incidents)len=incidents.length;
	
	$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
	for(var i=0; i<len; i++) {	

		var val = incidents[i].eventNumber;
		var incId = incidents[i].incId;

		$("#incidentList").append('<li><a href=\"#\" onclick=\"goToIncident(' + incId + '\);">' + val + '</a></li>');		

	}
	$("#incidentListDiv").trigger('create');*/
	//$("#incidentListDiv").trigger('refresh'); //use this to append new elements to the listview

	/*
	$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
			$.each(incidents.incident, function(key, val) {
				$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val.key + '</a></li>');		
		});		
	$("#incidentListDiv").trigger('create');
	*/
	/* Get live data from server:
	$.getJSON('../jsp/test.jsp', function(data) {				
		$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
		$.each(data.rows, function(key, val) {
			$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val.key + '</a></li>');		
		});		
		$("#incidentListDiv").trigger('create');
	});				  		
	  		*/
});	  		

function goToIncident(incidentId) {
	
	setCurrentIncidentByIncId();		
	
	$.mobile.changePage( "incidentForm.html");

}