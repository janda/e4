package dhs.cbp.obp.e4.couchDomain;

import java.util.Set;

import org.ektorp.docref.CascadeType;
import org.ektorp.docref.DocumentReferences;
import org.ektorp.docref.FetchType;

public class Incident extends BaseCouchDbDocument {

	private static final long serialVersionUID = -8652857753677646992L;

	private String eventNumber, title;
    
    @DocumentReferences(backReference = "incidentId", fetch = FetchType.LAZY, descendingSortOrder = true, orderBy = "lname", cascade = CascadeType.NONE)
    private Set<Subject> subjects;
    
    public Incident() {
    	this.setType("incident");
    }

	public String getEventNumber() {
		return eventNumber;
	}

	public void setEventNumber(String eventNumber) {
		this.eventNumber = eventNumber;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Set<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}

}
