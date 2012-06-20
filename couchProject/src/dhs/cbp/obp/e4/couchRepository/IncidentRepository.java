package dhs.cbp.obp.e4.couchRepository;

import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;

import dhs.cbp.obp.e4.couchDomain.Incident;
import dhs.cbp.obp.e4.couchDomain.Subject;

public class IncidentRepository extends CouchDbRepositorySupport<Incident> {

	public IncidentRepository(CouchDbConnector db) {
        super(Incident.class, db);
	}

	public void addSubject(Subject subject) throws Exception {		
		if(subject.getIncidentId() == null) {
			//TODO: This is bad.
			throw new Exception("No incident ID specified for new subject.");
		}
		db.create(subject);
	}
	
}
