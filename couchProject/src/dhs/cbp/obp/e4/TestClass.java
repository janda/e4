package dhs.cbp.obp.e4;

import java.util.List;

import org.ektorp.CouchDbConnector;
import org.ektorp.CouchDbInstance;
import org.ektorp.ViewQuery;
import org.ektorp.http.HttpClient;
import org.ektorp.http.StdHttpClient;
import org.ektorp.impl.StdCouchDbConnector;
import org.ektorp.impl.StdCouchDbInstance;

import dhs.cbp.obp.e4.couchDomain.Incident;

public class TestClass {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		TestClass tc = new TestClass();
		
		try {
			tc.testMethod();
		} catch(Exception e) {
			System.out.println(e);
		}

	}
	
	
	private void testMethod() throws Exception {
		
		HttpClient httpClient = new StdHttpClient.Builder()
        .url("http://localhost:5984")
        .build();

		CouchDbInstance dbInstance = new StdCouchDbInstance(httpClient);
		CouchDbConnector db = new StdCouchDbConnector("e4", dbInstance);

		if(db == null) {
			System.out.println("No database exists.");
		}
		
		ViewQuery query = new ViewQuery()
        .designDocId("_design/all_incidents")
        .viewName("All Incidents");
        //.key("red");
		
		List<Incident> incidents = db.queryView(query, Incident.class);
		
		for(Incident inc : incidents) {
			System.out.println(inc.getEventNumber());
		}
		
	}
	
}
