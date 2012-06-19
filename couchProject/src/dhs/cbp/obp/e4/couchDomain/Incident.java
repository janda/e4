package dhs.cbp.obp.e4.couchDomain;

import org.codehaus.jackson.annotate.JsonProperty;

public class Incident {

	@JsonProperty("_id")
    private String id;

    @JsonProperty("_rev")
    private String revision;

    private String eventNumber;
    
    private String title;   

    private String type;
    
    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

	public void setId(String s) {
        id = s;
    }

    public String getId() {
        return id;
    }

    public String getRevision() {
        return revision;
    }
	
}
