/**
 * g_ = global variable.
 * ALL_CAPS = constant variable.
 */

/**
 * Key to local storage list of incidents.
 * @const
 */
var INCIDENTS_LIST_KEY = "INC_LIST_KEY";

/**
 * In-memory representation of all incidents.
 */
g_incidents = null;

/** 
 * Current incident open for editing in the application.
 * @global
 */
g_curIncident = null;

/**
 * Obtain an incident object from the local storage object
 * by searching on the incident ID (incId).
 * @param incId
 */
function findIncidentByIncId(incId) {	
	var incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	
	var len=0;
	if(incidents)len=incidents.length;
	
	for(var i=0; i<len; i++) {	
		if(incId == incidents[i].incId) {
			return incidents[i];
		}
	}	
}

/**
 * Utility method to set the current incident based
 * upon an incident ID (incId). 
 * @param incId
 */
function setCurrentIncidentByIncId(incId) {
	g_curIncident = findIncidentByIncId(incId);
}