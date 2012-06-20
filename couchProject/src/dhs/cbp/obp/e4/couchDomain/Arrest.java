package dhs.cbp.obp.e4.couchDomain;

public class Arrest extends BaseCouchDbDocument {

	private String subjectId, location;
	
	public Arrest() {
		this.setType("arrest");
	}

	public String getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
}
