package dhs.cbp.obp.e4.couchRepository;

import java.util.List;

import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;

import dhs.cbp.obp.e4.couchDomain.Subject;

public class SubjectRepository extends CouchDbRepositorySupport<Subject> {

	public SubjectRepository(CouchDbConnector db) {
        super(Subject.class, db);
	}
	
	public List<Subject> getSubjectsInIncident(String incidentId) {
        return queryView("subjects_in_incident", incidentId);
	}
	
}
