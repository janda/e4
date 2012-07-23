$("#subjectPage").live("pageinit", function() {
	
	$("#subjects").change(function() {
		changeSubj(this.value);
	});
	
	setOnlineStatus(); //determine current network connectivity.
	setSubjectVals(); //populate initial values.
	setSubjSelect(); //setup the subject select box.
	
});

/**
 * Change the current subject via the subject select box.
 */
function changeSubj(civId) {
	
	saveSubject(false);
	
	g_curSubject = getSubjFromCurIncByCivId(civId);
	
	setSubjectVals();
	setSubjSelect();
}

/**
 * Add a new subject to the event and ready for data entry.
 */
function addSubj() {
	
	saveSubject(false);
	
	g_curSubject = new Object();
	g_curSubject.civId = uniqid(); //new subject ID:
	
	g_curIncident.subjects.push(g_curSubject); //add subject to incident.
	
	setSubjectVals();
	setSubjSelect();
	
}

/**
 * Populates the select box that contains all the subjects
 * in the current incident.
 */
function setSubjSelect() {
	
	$('#subjects').empty();
	
	var subjects = g_curIncident.subjects;
	var len = 0;
	
	if(subjects) {
		len = subjects.length;
	}
	
	if(len > 0) {
		for(i=0;i<len;i++) {
			
			var subject = subjects[i];
			var subjectName = (!subject.fname)?"":subject.lname + ", " + subject.fname;
			
			$('#subjects')
	          .append($('<option>', { value : subject.civId })
	          .text(subjectName)); 
			
			if(g_curSubject && subject.civId == g_curSubject.civId) {
				$('#subjects')[0].selectedIndex = i;
			}
			
		}
		
		$('#subjects').selectmenu("refresh");
		
	}
	
}

/**
 * Function transfers data from the subject object to the fields on the form.
 */
function setSubjectVals() {			
	
	if(g_curSubject == null) { //no current subject defined.
		
		if(g_curIncident.subjects) {//start with first subject.
			
			g_curSubject = g_curIncident.subjects[0];
			
		} else { //This is the very first subject for a new event.
			g_curSubject = new Object();
			g_curSubject.civId = uniqid(); //new subject ID:
			g_curIncident.subjects = new Array();
			g_curIncident.subjects.push(g_curSubject);
		}
			
	}

	$("#lname").val(g_curSubject.lname);
	$("#fname").val(g_curSubject.fname);
	
	var gender = g_curSubject.gender;
	if(gender == "M") {
		$("#radio-male").attr('checked', true).checkboxradio("refresh");
	} else if(gender == "F") {
		$("#radio-female").attr('checked', true).checkboxradio("refresh");
	} else {
		$("#radio-male").attr('checked', false).checkboxradio("refresh");	
		$("#radio-female").attr('checked', false).checkboxradio("refresh");
	}
	
}

/**
 * Transfer values from page to in-memory object and
 * save subject to local storage.
 * 
 * @param alertSave boolean indicates if an alert message should appear after saving.
 */
function saveSubject(alertSave) {
	
	g_curSubject.lname = $("#lname").val();
	g_curSubject.fname = $("#fname").val();
	g_curSubject.gender = $('input:radio[name=gender]:checked').val();
	
	saveCurSubject();
	setSubjSelect();
	
	if(alertSave) alert("Save Completed.");
	
}