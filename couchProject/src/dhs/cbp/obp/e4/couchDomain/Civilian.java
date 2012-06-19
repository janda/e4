package dhs.cbp.obp.e4.couchDomain;


public class Civilian extends CouchDbDocument {
	
	private String lname, fname;

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}
		
}
