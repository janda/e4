
$("#incidentPage").live("pageinit", function() {
	
	$("#eventNumber").val(g_curIncident.eventNumber);
	$("#arsDt").val(g_curIncident.arsDt);
	$("#arsTm").val(g_curIncident.arsTm);
	$("#title").val(g_curIncident.title);
	
	if(g_curIncident && g_curIncident.status == "NEW") {	
		$("#arsLat").val(g_current_lat);
		$("#arsLon").val(g_current_lon);
	} else {
		$("#arsLat").val(g_curIncident.arsLat);
		$("#arsLon").val(g_curIncident.arsLon);
	}
	
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