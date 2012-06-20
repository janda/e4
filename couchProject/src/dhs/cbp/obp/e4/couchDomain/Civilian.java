package dhs.cbp.obp.e4.couchDomain;


public class Civilian extends BaseCouchDbDocument {
	
	private String lname, fname;
	
	public Civilian() {
		this.setType("civilian");
	}

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
