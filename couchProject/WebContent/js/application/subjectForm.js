$("#subjectPage").live("pageinit", function() {
	
	//setOnlineStatus();
	setSubjectVals();
	
});



function setSubjectVals() {
	
	if(g_curSubject == null) { //start with first subject.
		g_curSubject = g_curIncident.subjects[0];	
	}

	$("#lname").val(g_curSubject.lname);
	$("#fname").val(g_curSubject.fname);
	$("#gender").val(g_curSubject.gender);
	
}


function saveSubject() {
	
	//saveCurIncident();
	alert("Save Completed.");
}