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
				
		HttpClient couchHttpClient = new StdHttpClient.Builder()
		//.proxy("firewall")
		//.proxyPort(80)
		.url("http://janda.iriscouch.com:80")
		//.url("http://localhost:5984")
		.build();
		
		CouchDbInstance dbInstance = new StdCouchDbInstance(couchHttpClient);
		CouchDbConnector db = new StdCouchDbConnector("e4", dbInstance);

		if(db == null) {
			System.out.println("No database exists.");
		}
		
		//Get all docs in this view and print them out.
		ViewQuery query = new ViewQuery()
        .designDocId("_design/processing")
        .viewName("all_incidents");
		
		List<Incident> incidents = db.queryView(query, Incident.class);
		
		for(Incident inc : incidents) {
			System.out.println(inc.getEventNumber());
		}
		
		//Use the same view but get only one document by key.
		query = new ViewQuery()
        .designDocId("_design/processing")
        .viewName("all_incidents")
        .key("IMB09090002");
		
		incidents = db.queryView(query, Incident.class);
		
		for(Incident inc : incidents) {
			System.out.println(inc.getEventNumber() + " " + inc.getTitle());
		}
		
	}
	
}
