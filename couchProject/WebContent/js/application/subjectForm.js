$("#subjectPage").live("pageinit", function() {
	
	//setOnlineStatus();
	setSubjectVals();
	
});

function changeSubj() {
	
}

function setSubjectVals() {
		
	var subjects = g_curIncident.subjects;
	var len = 0;
	
	if(subjects) {
		len = subjects.length;
	}
	
	if(len > 0) {
		for(i=0;i<len;i++) {
			
			var subject = subjects[i];
			var subjectName = subject.lname + ", " + subject.fname;
			
			$('#subjects')
	          .append($('<option>', { value : subject.civId })
	          .text(subjectName)); 
			
			if(g_curSubject && subject.civId == g_curSubject.civId) {
				$('#subjects')[0].selectedIndex = i;
			}
			
		}
		
		$('#subjects').selectmenu("refresh");
		
	}
	
	if(g_curSubject == null) { //start with first subject.
		g_curSubject = g_curIncident.subjects[0];	
	}

	$("#lname").val(g_curSubject.lname);
	$("#fname").val(g_curSubject.fname);
	
	var gender = g_curSubject.gender;
	if(gender == "M") {
		$("#radio-male").attr('checked', true).checkboxradio("refresh");
	} else if(gender == "F") {
		$("#radio-female").attr('checked', true).checkboxradio("refresh");
	}
	
}

//use for new subject ID:
//uniqid()

/**
 * Transfer values from page to in-memory object and
 * save subject to local storage.
 */
function saveSubject() {
	
	g_curSubject.lname = $("#lname").val();
	g_curSubject.fname = $("#fname").val();
	g_curSubject.gender = $('input:radio[name=gender]:checked').val();
	
	saveCurSubject();
	alert("Save Completed.");
}