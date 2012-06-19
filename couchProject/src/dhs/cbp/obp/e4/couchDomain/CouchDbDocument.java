package dhs.cbp.obp.e4.couchDomain;

import org.codehaus.jackson.annotate.JsonProperty;

public abstract class CouchDbDocument {

	@JsonProperty("_id")
    private String id;

    @JsonProperty("_rev")
    private String revision;
    
    private String type;
    
    public String getType() {
		return type;
	}

	public void setType(String s) {
		type = s;
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
    
    public void setRevision(String s) {
        revision = s;
    }
	
}
