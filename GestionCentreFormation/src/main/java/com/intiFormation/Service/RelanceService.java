package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IContactDao;
import com.intiFormation.dao.IFormateurDao;
import com.intiFormation.dao.IFormationDao;
import com.intiFormation.dao.IPaiementDao;
import com.intiFormation.dao.IParticipantDao;
import com.intiFormation.dao.IProspectDao;
import com.intiFormation.dao.IRelanceDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Role;
@Service
public class RelanceService implements IRelanceService{

	@Autowired
	private IRelanceDao redao;
	
	
	
	

	public RelanceService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Relance r) {
		redao.save(r);
	}
	
	public Optional<Relance> selectByIdService(int id){
		Optional<Relance>op=redao.findById(id);
		return op;
	}
	
	public List<Relance> getAllService(){
		List<Relance> liste=redao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		redao.deleteById(id);
	}
	public void modifierService(Relance r) {
		redao.save(r);
	}

	public IRelanceDao getRedao() {
		return redao;
	}

	public void setRedao(IRelanceDao redao) {
		this.redao = redao;
	}
	
}
