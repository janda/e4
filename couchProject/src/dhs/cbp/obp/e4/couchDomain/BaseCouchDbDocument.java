package dhs.cbp.obp.e4.couchDomain;

import org.ektorp.support.CouchDbDocument;

/**
 * Base class for any document in the system.
 * 
 */
public abstract class BaseCouchDbDocument extends CouchDbDocument {
    
	private static final long serialVersionUID = 4979162501514609147L;
	private String type;
    
    public String getType() {
		return type;
	}

	public void setType(String s) {
		type = s;
	}
 	
}
