package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IContactDao;
import com.intiFormation.dao.IFormateurDao;
import com.intiFormation.dao.IFormationDao;
import com.intiFormation.dao.IPaiementDao;
import com.intiFormation.dao.IParticipantDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Role;

public class ParticipantService implements IParticipantService{

	@Autowired
	private IParticipantDao pdao;
	
	
	
	

	public ParticipantService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Participant r) {
		pdao.save(r);
	}
	
	public Optional<Participant> selectByIdService(int id){
		Optional<Participant>op=pdao.findById(id);
		return op;
	}
	
	public List<Participant> getAllService(){
		List<Participant> liste=pdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		pdao.deleteById(id);
	}
	public void modifierService(Participant r) {
		pdao.save(r);
	}
	
	

	public IParticipantDao getPdao() {
		return pdao;
	}

	public void setPdao(IParticipantDao pdao) {
		this.pdao = pdao;
	}
	
}
