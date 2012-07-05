
$("#incidentPage").live("pageinit", function() {

	var incidentFormViewModel = {
			//Prepopulate fields.
			eventNumber: ko.observable(g_curIncident.eventNumber),
			eventTitle: ko.observable(g_curIncident.title),
	        arsLat: ko.observable(g_curIncident.arsLat),
	        arsLon: ko.observable(g_curIncident.arsLon),
	        arsDt: ko.observable(g_curIncident.arsDt),
	        arsTm: ko.observable(g_curIncident.arsTm)
	 };
	
	ko.applyBindings(incidentFormViewModel,this);
	setOnlineStatus();
	
});

function saveEvent() {
	
	g_curIncident.arsDt = $("#arsDt").val();
	g_curIncident.arsTm = $("#arsTm").val();
	g_curIncident.arsLat = $("#arsLat").val();
	g_curIncident.arsLon = $("#arsLon").val();
	g_curIncident.title = $("#title").val();
	
	saveCurIncident();
	alert("Save Completed.");
}