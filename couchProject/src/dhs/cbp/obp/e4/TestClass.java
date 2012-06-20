package dhs.cbp.obp.e4;

import java.util.List;

import org.ektorp.CouchDbConnector;
import org.ektorp.CouchDbInstance;
import org.ektorp.http.HttpClient;
import org.ektorp.http.StdHttpClient;
import org.ektorp.impl.StdCouchDbConnector;
import org.ektorp.impl.StdCouchDbInstance;

import dhs.cbp.obp.e4.couchDomain.Incident;
import dhs.cbp.obp.e4.couchDomain.Subject;
import dhs.cbp.obp.e4.couchRepository.IncidentRepository;
import dhs.cbp.obp.e4.couchRepository.SubjectRepository;

public class TestClass {

	private CouchDbInstance dbInstance;
	private CouchDbConnector db;
	
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		TestClass tc = new TestClass();
		
		try {
			
			tc.setUpUrl("http://localhost:5984");
			//tc.setUpUrl("http://janda.iriscouch.com:80");
			//tc.setUpUrl("http://janda.iriscouch.com:80", "firewall", 80);
			
			tc.testMethod();
			
			//tc.createTestData();
			
		} catch(Exception e) {
			System.out.println(e);
		}

	}
	
	private void getSubjectsInIncident(String incidentId) throws Exception {				
		
		SubjectRepository subjectRep = new SubjectRepository(db);
		
		List<Subject> list = subjectRep.getSubjectsInIncident(incidentId);
						
		for(Subject subject : list) {
			System.out.println("Subject last name = " + subject.getLname());
		}
		
	}
	
	private void createTestData() throws Exception {
		
		IncidentRepository rep = new IncidentRepository(db);

		Incident inc = new Incident();
		
		rep.add(inc);
		
		inc.setEventNumber("TEST1234");
		inc.setTitle("Test title");
		
		String incidentId = inc.getId();
		
		Subject subject1 = new Subject();
		subject1.setFname("Fname1");
		subject1.setLname("Lname1");
		subject1.setIncidentId(incidentId);
		
		Subject subject2 = new Subject();
		subject2.setFname("Fname2");
		subject2.setLname("Lname2");
		subject2.setIncidentId(incidentId);
		
		rep.addSubject(subject1);
		rep.addSubject(subject2);
		
		rep.update(inc);
		
	}
	
	private void setUpUrl(String host) throws Exception {
		
		HttpClient couchHttpClient = new StdHttpClient.Builder()		
		.url(host)
		.build();
		
		connectDb(couchHttpClient);
		
	}
	
	private void setUpUrl(String host, String proxy, Integer port) throws Exception {
		
		HttpClient couchHttpClient = new StdHttpClient.Builder()
		.proxy("firewall")
		.proxyPort(port.intValue())		
		.url(host)
		.build();
		
		connectDb(couchHttpClient);
		
	}
	
	private void connectDb(HttpClient couchHttpClient) {
		
		this.dbInstance = new StdCouchDbInstance(couchHttpClient);
		this.db = new StdCouchDbConnector("e4", dbInstance);

		if(db == null) {
			System.out.println("No database exists.");
		}
		
	}
	
	private void testMethod() throws Exception {				
		
		IncidentRepository rep = new IncidentRepository(db);
		
		List<Incident> incidents = rep.getAllIncidents(null);
		
		for(Incident inc : incidents) {
			System.out.println(inc.getEventNumber());
			getSubjectsInIncident(inc.getId());
		}
		
		incidents = rep.getAllIncidents("IMB09090002");
		
		for(Incident inc : incidents) {
			System.out.println(inc.getEventNumber() + " " + inc.getTitle());
		}
		
	}
	
}
