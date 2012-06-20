package dhs.cbp.obp.e4.couchDomain;

import java.util.Set;

import org.ektorp.docref.CascadeType;
import org.ektorp.docref.DocumentReferences;
import org.ektorp.docref.FetchType;

public class Subject extends Civilian {

	private static final long serialVersionUID = -2731099585134375515L;

	private String alienNumber, incidentId, dispCd;
	
	@DocumentReferences(backReference = "subjectId", fetch = FetchType.LAZY, descendingSortOrder = true, cascade = CascadeType.NONE)
	private Set<Arrest> arrests;

	public Subject() {
		this.setType("subject");
	}
	
	public String getAlienNumber() {
		return alienNumber;
	}

	public void setAlienNumber(String alienNumber) {
		this.alienNumber = alienNumber;
	}

	public String getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(String incidentId) {
		this.incidentId = incidentId;
	}

	public String getDispCd() {
		return dispCd;
	}

	public void setDispCd(String dispCd) {
		this.dispCd = dispCd;
	}

	public Set<Arrest> getArrests() {
		return arrests;
	}

	public void setArrests(Set<Arrest> arrests) {
		this.arrests = arrests;
	}
			
}
