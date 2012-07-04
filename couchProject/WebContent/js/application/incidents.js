/**
 * Functions specific to incidents.html.
 */
$("#incidentListPage").live("pageinit", function() {

	ko.applyBindings(new ViewModel(), this);

});	  		

	var ViewModel = function(incidents) {
	   var self = this;
	   this.incidents = ko.observableArray( $.jStorage.get(INCIDENTS_LIST_KEY) );
	   
	   self.goToIncident = function(incident) {
		   setCurrentIncident(incident);
		   $.mobile.changePage( "incidentForm.html");
	   };
                  
	};