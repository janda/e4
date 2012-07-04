
$("#incidentPage").live("pageinit", function() {
	
	alert(g_curIncident.eventNumber);

	var incidentFormViewModel = {
			//Prepopulate fields.
			eventNumber: ko.observable(g_curIncident.eventNumber),
			eventTitle: ko.observable(g_curIncident.title),
	        lat: ko.observable(g_curIncident.lat),
	        lon: ko.observable(g_curIncident.lon),
	        arsDt: ko.observable(g_curIncident.arsDt),
	        arsTm: ko.observable(g_curIncident.arsTm)
	 };	
	
	ko.applyBindings(incidentFormViewModel,this);
	
});