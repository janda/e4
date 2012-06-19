package dhs.cbp.obp.e4.couchDomain;

public class Incident extends CouchDbDocument {

    private String eventNumber, title;

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

}
