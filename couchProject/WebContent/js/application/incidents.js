/**
 * Functions specific to incidents.html.
 */
$("#incidentListPage").live("pageinit", function() {
//$("#incidentListPage").live("pagebeforeshow", function() {	
	g_incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	

	var ViewModel = function(incidents) {
	   var self = this;
	   this.incidents = ko.observableArray(g_incidents);
	   
	   self.goToIncident = function(incident) {
		   setCurrentIncident(incident);
		   $.mobile.changePage( "incidentForm.html");
       };
                     
	};

	ko.applyBindings(new ViewModel(g_incidents), this);

});	  		
